import React, { useState } from 'react';
import Card from './ui/Card';
import Button from './ui/Button';
import SummaryCard from './ui/SummaryCard';
import ExamCard from './ui/ExamCard';
import Icon from './icons/Icon';
import './Dashboard.css';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('todos');

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">🎓</div>
          <h1 className="sidebar-title">Unical</h1>
        </div>
        <div className="sidebar-nav">
          <Button
            variant="ghost"
            icon="document"
            className={'nav-link active'}
            onClick={() => console.log('Navegar a Exámenes')}
          >
            Exámenes
          </Button>
          <Button
            variant="ghost"
            icon="calendar"
            className={'nav-link'}
            onClick={() => console.log('Navegar a Horarios')}
          >
            Horarios
          </Button>
        </div>
        <div className="sidebar-footer">
          <div className="welcome-message">
            <h2 className="welcome-title">Bienvenido,</h2>
            <p className="welcome-subtitle">Admin Usuario</p>
          </div>
          <div className="user-avatar">AU</div>
          <div className="user-info">
            <span className="user-name">Admin Usuario</span>
            <span className="user-role">Administrador</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="dashboard-content">
        {/* Content Header */}
        <div className="content-header">
          <div className="content-title">
            <h2>Gestión de Exámenes</h2>
            <p>Programa y administra los exámenes</p>
          </div>
          <Button
            variant="primary"
            icon="plus"
            onClick={() => console.log('Nuevo Examen')}
          >
            Nuevo Examen
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="summary-cards">
          <SummaryCard
            title="Total Exámenes"
            value="2"
            description="Programados en el sistema"
            icon="document"
            variant="total"
          />
          <SummaryCard
            title="Conflictos"
            value="0"
            description="Requieren atención"
            icon="warning"
            variant="conflicts"
          />
          <SummaryCard
            title="Horas Afectadas"
            value="0"
            description="Horas de clase impactadas"
            icon="clock"
            variant="hours"
          />
          <SummaryCard
            title="Confirmados"
            value="1"
            description="Listos para aplicar"
            icon="check"
            variant="confirmed"
          />
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          <Button variant="ghost" className={`filter-tab ${activeTab === 'todos' ? 'active' : ''}`} onClick={() => setActiveTab('todos')} icon="list">Todos</Button>
          <Button variant="ghost" className={`filter-tab ${activeTab === 'parciales' ? 'active' : ''}`} onClick={() => setActiveTab('parciales')}>Parciales</Button>
          <Button variant="ghost" className={`filter-tab ${activeTab === 'ordinarios' ? 'active' : ''}`} onClick={() => setActiveTab('ordinarios')}>Ordinarios</Button>
          <Button variant="ghost" className={`filter-tab ${activeTab === 'extraordinarios' ? 'active' : ''}`} onClick={() => setActiveTab('extraordinarios')}>Extraordinarios</Button>
          <Button variant="ghost" className={`filter-tab ${activeTab === 'especiales' ? 'active' : ''}`} onClick={() => setActiveTab('especiales')}>Especiales</Button>
        </div>

        {/* Exam List */}
        <div className="exam-list">
          <ExamCard
            exam={{
              title: "Anatomía I",
              type: "parcial",
              status: "programado",
              group: "MED-1A (35 estudiantes)",
              location: "Biblioteca",
              date: "14 de noviembre de 2025",
              professor: "Dr. Juan Pérez",
              time: "16:00 - 18:00",
              applicator: "Prof. Roberto Sánchez",
              note: "Programado en horario de biblioteca para no afectar clases"
            }}
            onDelete={() => console.log('Eliminar examen')}
            onEdit={() => console.log('Editar examen')}
          />
          
          <ExamCard
            exam={{
              title: "Enfermería Básica",
              type: "ordinario",
              status: "confirmado",
              group: "ENF-2A (28 estudiantes)",
              location: "Aula 102",
              date: "19 de noviembre de 2025",
              professor: "Lic. Carlos López",
              time: "10:00 - 12:00",
              applicator: "Prof. Laura Hernández"
            }}
            onDelete={() => console.log('Eliminar examen')}
            onEdit={() => console.log('Editar examen')}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
