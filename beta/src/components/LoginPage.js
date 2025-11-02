import React, { useState } from 'react';
import Card from './ui/Card';
import Button from './ui/Button';
import Input from './ui/Input';
import Icon from './icons/Icon';
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de validación y autenticación.
    console.log('Intentando iniciar sesión con:', { email, password });
    onLogin();
  };

  return (
    <div className="login-container">
      <div className="login-background">
        <div className="login-background__pattern"></div>
      </div>
      
      <Card variant="elevated" className="login-card" padding="large">
        {/* Header Section */}
        <div className="login-header">
          <div className="login-icon">
            <Icon name="graduation" size={32} color="white" />
          </div>
          <h1 className="login-title">Sistema de Calendarización</h1>
          <p className="login-subtitle">Ingresa tus credenciales para acceder al sistema</p>
        </div>

        {/* Login Form */}
        <form className="login-form" onSubmit={handleSubmit}>
          <Input
            label="Correo Electrónico"
            type="email"
            placeholder="usuario@universidad.edu"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <Input
            label="Contraseña"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          <Button
            type="submit"
            variant="primary"
            size="large"
            icon="arrowRight"
            className="login-button"
          >
            Iniciar Sesión
          </Button>
        </form>

      </Card>
    </div>
  );
};

export default LoginPage;
