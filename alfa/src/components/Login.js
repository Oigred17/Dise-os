import React, { useState } from 'react';
import InputField from './common/InputField';
import AnimatedCard from './common/AnimatedCard';
import './Login.css';

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular delay de autenticación
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (onLogin) {
      onLogin({ email, password });
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="login-container">
      <AnimatedCard delay={0}>
        <div className="login-icon-container">
          <div className="login-icon">
            <UserIcon />
          </div>
        </div>
      </AnimatedCard>
      
      <AnimatedCard delay={100}>
        <div className="login-card">
          <form onSubmit={handleSubmit} className="login-form">
            <InputField
              type="email"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={UserIcon}
            />

            <InputField
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              icon={LockIcon}
            />

            <div className="login-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Remember me</span>
              </label>
              <a href="#forgot" className="forgot-password">Forgot Password?</a>
            </div>
          </form>
        </div>
      </AnimatedCard>

      <AnimatedCard delay={200}>
        <button 
          type="button" 
          onClick={handleSubmit} 
          className={`login-button ${isSubmitting ? 'submitting' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="button-spinner"></span>
              Iniciando...
            </>
          ) : (
            'LOGIN'
          )}
        </button>
      </AnimatedCard>
    </div>
  );
}

export default Login;

