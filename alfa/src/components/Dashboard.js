import React, { useState } from 'react';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import AnimatedCard from './common/AnimatedCard';
import './Dashboard.css';

function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('Semana del 8 al 14 de octubre');
  const [selectedProgram, setSelectedProgram] = useState('');
  const [selectedCareer, setSelectedCareer] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('Salón 101');
  const [selectedView, setSelectedView] = useState('Vista semanal');
  const [draggedExam, setDraggedExam] = useState(null);

  // Estructura de programas académicos según la imagen
  const academicPrograms = {
    'LICENCIATURAS': {
      careers: [
        'LICENCIATURA EN ADMINISTRACIÓN MUNICIPAL',
        'LICENCIATURA EN ADMINISTRACIÓN PÚBLICA',
        'LICENCIATURA EN CIENCIAS BIOMÉDICAS',
        'LICENCIATURA EN CIENCIAS EMPRESARIALES',
        'LICENCIATURA EN ENFERMERÍA',
        'LICENCIATURA EN INFORMÁTICA',
        'LICENCIATURA EN MEDICINA',
        'LICENCIATURA EN NUTRICIÓN',
        'LICENCIATURA EN ODONTOLOGÍA'
      ],
      groups: ['Grupo A', 'Grupo B', 'Grupo C', 'Grupo D']
    },
    'POSGRADOS': {
      careers: [
        'MAESTRÍA EN ADMINISTRACIÓN UNIVERSITARIA',
        'MAESTRÍA EN GOBIERNO ELECTRÓNICO',
        'MAESTRÍA EN PLANEACIÓN ESTRATÉGICA MUNICIPAL',
        'MAESTRÍA EN SALUD PÚBLICA',
        'DOCTORADO EN GOBIERNO ELECTRÓNICO'
      ],
      groups: ['Grupo 1', 'Grupo 2', 'Grupo 3']
    },
    'INGRESO A LICENCIATURA': {
      careers: ['CURSO DE INGRESO GENERAL'],
      groups: ['Grupo Matutino', 'Grupo Vespertino']
    },
    'INGRESO A POSGRADO': {
      careers: ['CURSO DE INGRESO GENERAL'],
      groups: ['Grupo Intensivo']
    },
    'BECAS': {
      careers: ['PROGRAMA DE BECAS'],
      groups: ['Becarios Activos']
    },
    'BIBLIOTECA': {
      careers: ['SERVICIOS BIBLIOTECARIOS'],
      groups: ['Sala de Estudio', 'Sala de Investigación']
    },
    'SERVICIOS ESCOLARES': {
      careers: ['ADMINISTRACIÓN ESCOLAR'],
      groups: ['Grupo Administrativo']
    }
  };


  // Tipos de exámenes disponibles (adaptados por carrera)
  const getExamTypesByCareer = (career) => {
    const baseExams = [
      { id: 'PAR1', name: 'Parcial 1', color: '#48bb78', duration: 90 },
      { id: 'PAR2', name: 'Parcial 2', color: '#f687b3', duration: 90 },
      { id: 'FINAL', name: 'Final', color: '#4299e1', duration: 120 },
      { id: 'REC', name: 'Recuperación', color: '#f6e05e', duration: 90 },
      { id: 'EXT', name: 'Extraordinario', color: '#805ad5', duration: 120 }
    ];
    
    if (career.includes('MEDICINA') || career.includes('ENFERMERÍA') || career.includes('ODONTOLOGÍA')) {
      return [
        ...baseExams,
        { id: 'CLIN', name: 'Clínico', color: '#fc8181', duration: 180 },
        { id: 'PRAC', name: 'Práctico', color: '#9f7aea', duration: 120 }
      ];
    }
    
    if (career.includes('INFORMÁTICA')) {
      return [
        ...baseExams,
        { id: 'PROY', name: 'Proyecto', color: '#38b2ac', duration: 150 },
        { id: 'LAB', name: 'Laboratorio', color: '#ed8936', duration: 90 }
      ];
    }
    
    return baseExams;
  };

  const examTypes = selectedCareer ? getExamTypesByCareer(selectedCareer) : [];

  // Generar horas de 7:00 AM a 8:00 PM
  const timeSlots = [];
  for (let hour = 7; hour <= 20; hour++) {
    timeSlots.push({
      hour: hour,
      display: hour <= 12 
        ? `${hour}:00 ${hour === 12 ? 'PM' : 'AM'}` 
        : `${hour - 12}:00 PM`,
      military: hour
    });
  }

  // Días de la semana
  const weekDays = [
    { day: 'Lunes', date: 8, short: 'Lun' },
    { day: 'Martes', date: 9, short: 'Mar' },
    { day: 'Miércoles', date: 10, short: 'Mie' },
    { day: 'Jueves', date: 11, short: 'Jue' },
    { day: 'Viernes', date: 12, short: 'Vie' },
    { day: 'Sábado', date: 13, short: 'Sab' }
  ];

  // Salones disponibles
  const rooms = ['Salón 101', 'Salón 102', 'Salón 103', 'Salón 201', 'Salón 202', 'Salón 301', 'Aula Magna', 'Laboratorio A', 'Laboratorio B'];

  // Obtener carreras del programa seleccionado
  const availableCareers = selectedProgram && academicPrograms[selectedProgram] 
    ? academicPrograms[selectedProgram].careers 
    : [];

  // Obtener grupos de la carrera seleccionada
  const availableGroups = selectedProgram && academicPrograms[selectedProgram]
    ? academicPrograms[selectedProgram].groups
    : [];

  const handleDragStart = (examType) => {
    setDraggedExam(examType);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
  };

  const handleDragLeave = (e) => {
    e.currentTarget.classList.remove('drag-over');
  };

  const handleDrop = (e, timeSlot, day) => {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
    if (draggedExam) {
      // Aquí iría la lógica para asignar el examen al horario
      console.log(`Asignar examen ${draggedExam.name} a ${day.day} ${day.date} a las ${timeSlot.display}`);
      setDraggedExam(null);
    }
  };

  return (
    <div className="dashboard">
      <Header onMenuToggle={() => {}} />
      
      <div className="dashboard-content">
        <Sidebar />

        {/* Main Content */}
        <main className="main-content">
          <div className="content-header">
            <div>
              <h1>Horario de Exámenes Universitario</h1>
              <p className="subtitle">
                {selectedCareer && selectedGroup 
                  ? `${selectedCareer} - ${selectedGroup} | ${selectedRoom} | 7:00 AM - 8:00 PM`
                  : `Selecciona Programa, Carrera y Grupo | ${selectedRoom} | 7:00 AM - 8:00 PM`
                }
              </p>
            </div>
            <div className="header-controls">
              <select 
                className="program-select"
                value={selectedProgram}
                onChange={(e) => {
                  setSelectedProgram(e.target.value);
                  setSelectedCareer('');
                  setSelectedGroup('');
                }}
              >
                <option value="">Seleccionar Programa</option>
                {Object.keys(academicPrograms).map(program => (
                  <option key={program} value={program}>{program}</option>
                ))}
              </select>
              {selectedProgram && (
                <select 
                  className="career-select"
                  value={selectedCareer}
                  onChange={(e) => {
                    setSelectedCareer(e.target.value);
                    setSelectedGroup('');
                  }}
                >
                  <option value="">Seleccionar Carrera</option>
                  {availableCareers.map(career => (
                    <option key={career} value={career}>{career}</option>
                  ))}
                </select>
              )}
              {selectedCareer && (
                <select 
                  className="group-select"
                  value={selectedGroup}
                  onChange={(e) => setSelectedGroup(e.target.value)}
                >
                  <option value="">Seleccionar Grupo</option>
                  {availableGroups.map(group => (
                    <option key={group} value={group}>{group}</option>
                  ))}
                </select>
              )}
              <select 
                className="period-select"
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
              >
                <option>Semana del 8 al 14 de octubre</option>
                <option>Semana del 15 al 21 de octubre</option>
                <option>Semana del 22 al 28 de octubre</option>
              </select>
              <select 
                className="room-select"
                value={selectedRoom}
                onChange={(e) => setSelectedRoom(e.target.value)}
              >
                {rooms.map(room => (
                  <option key={room} value={room}>{room}</option>
                ))}
              </select>
              <select 
                className="view-select"
                value={selectedView}
                onChange={(e) => setSelectedView(e.target.value)}
              >
                <option>Vista semanal</option>
                <option>Vista diaria</option>
              </select>
              <button className="options-button">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>
              </button>
            </div>
          </div>

          <div className="planning-container">
            {/* Left Panel - Tipos de Exámenes */}
            <div className="left-panel">
              {selectedCareer ? (
                <>
                  <div className="panel-title">
                    <h3>Exámenes - {selectedCareer.split(' EN ')[1] || selectedCareer}</h3>
                    <p className="panel-subtitle">Arrastra para asignar al horario</p>
                  </div>
                  
                  <div className="exam-types">
                    {examTypes.length > 0 ? (
                      examTypes.map(exam => (
                        <div
                          key={exam.id}
                          className="exam-block"
                          style={{ backgroundColor: exam.color }}
                          draggable
                          onDragStart={() => handleDragStart(exam)}
                        >
                          <div className="exam-block-name">{exam.name}</div>
                          <div className="exam-block-id">{exam.id}</div>
                          <div className="exam-block-duration">{exam.duration} min</div>
                        </div>
                      ))
                    ) : (
                        <div className="no-exams-message">Selecciona una carrera para ver los exámenes</div>
                      )}
                  </div>
                </>
              ) : (
                <div className="panel-title">
                  <h3>Selecciona un Programa y Carrera</h3>
                  <p className="panel-subtitle">Para ver los tipos de exámenes disponibles</p>
                </div>
              )}

              <div className="drag-instruction">
                <p>Arrastra un examen al horario deseado</p>
                <span className="arrow-up">→</span>
              </div>

              <div className="room-info">
                <h4>Información del Salón</h4>
                <div className="info-item">
                  <span className="info-label">Capacidad:</span>
                  <span className="info-value">40 estudiantes</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Equipamiento:</span>
                  <span className="info-value">Proyector, Pizarra</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Ubicación:</span>
                  <span className="info-value">Edificio A, Piso 1</span>
                </div>
              </div>

              {selectedGroup && (
                <div className="room-info group-info">
                  <h4>Información del Grupo</h4>
                  <div className="info-item">
                    <span className="info-label">Carrera:</span>
                    <span className="info-value">{selectedCareer.split(' EN ')[1] || selectedCareer}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Grupo:</span>
                    <span className="info-value">{selectedGroup}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Estudiantes:</span>
                    <span className="info-value">{Math.floor(Math.random() * 10) + 30} alumnos</span>
                  </div>
                </div>
              )}
            </div>

            {/* Center Panel - Schedule Grid */}
            <div className="schedule-grid">
              <div className="grid-header">
                <div className="time-column-header">Hora</div>
                {weekDays.map(day => (
                  <div key={`${day.day}-${day.date}`} className="day-header">
                    <div className="day-name">{day.day}</div>
                    <div className="day-date">{day.date}</div>
                  </div>
                ))}
              </div>

              {timeSlots.map((timeSlot, timeIdx) => (
                <div key={timeSlot.hour} className="schedule-row">
                  <div className="time-column">
                    <div className="time-display">{timeSlot.display}</div>
                  </div>
                  {weekDays.map(day => (
                    <div
                      key={`${day.day}-${day.date}-${timeSlot.hour}`}
                      className="schedule-cell"
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={(e) => handleDrop(e, timeSlot, day)}
                    >
                      {examTypes.length > 0 && Math.random() > 0.85 && (() => {
                        const randomExam = examTypes[Math.floor(Math.random() * examTypes.length)];
                        return randomExam ? (
                          <div 
                            className="exam-assignment"
                            style={{ 
                              backgroundColor: randomExam.color 
                            }}
                          >
                            <div className="exam-assignment-name">
                              {randomExam.name}
                            </div>
                            <div className="exam-assignment-time">
                              {timeSlot.display}
                            </div>
                          </div>
                        ) : null;
                      })()}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Right Panel - Summary */}
            <div className="right-panel">
              <div className="summary-header">
                <h3>Resumen Semanal</h3>
              </div>
              <div className="summary-content">
                <div className="summary-stat">
                  <div className="stat-label">Exámenes Programados</div>
                  <div className="stat-value">12</div>
                </div>
                <div className="summary-stat">
                  <div className="stat-label">Horas Ocupadas</div>
                  <div className="stat-value">18.5h</div>
                </div>
                <div className="summary-stat">
                  <div className="stat-label">Horas Disponibles</div>
                  <div className="stat-value">65.5h</div>
                </div>
                <div className="summary-stat">
                  <div className="stat-label">Ocupación</div>
                  <div className="stat-value">22%</div>
                </div>
              </div>
              
              <div className="summary-header">
                <h3>Exámenes por Día</h3>
              </div>
              <div className="daily-summary">
                {weekDays.map(day => (
                  <div key={day.day} className="daily-item">
                    <div className="daily-day">{day.short}</div>
                    <div className="daily-count">{Math.floor(Math.random() * 3) + 1}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Availability Section */}
          <div className="availability-section">
            <h2>Disponibilidad del Salón</h2>
            <div className="availability-info">
              <div className="availability-item">
                <span className="availability-label">Horario de Operación:</span>
                <span className="availability-value">7:00 AM - 8:00 PM</span>
              </div>
              <div className="availability-item">
                <span className="availability-label">Tiempo Total:</span>
                <span className="availability-value">13 horas diarias</span>
              </div>
              <div className="availability-item">
                <span className="availability-label">Días Activos:</span>
                <span className="availability-value">Lunes a Sábado</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;

