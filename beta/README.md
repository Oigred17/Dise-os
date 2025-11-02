#  Sistema de Calendarización de Exámenes

Una aplicación web moderna y altamente modular para la gestión y calendarización de exámenes universitarios, desarrollada con React y las mejores prácticas de desarrollo frontend.

##  Características Principales

### 🎨 **Diseño Moderno y Sofisticado**
- **Gradientes y Sombras**: Efectos visuales modernos con gradientes CSS y sombras dinámicas
- **Animaciones Fluidas**: Transiciones suaves y micro-interacciones que mejoran la experiencia del usuario
- **Glassmorphism**: Efectos de cristal con backdrop-filter para un look contemporáneo
- **Responsive Design**: Optimizado para todos los dispositivos con breakpoints inteligentes

###  **Arquitectura Modular**
- **Componentes Reutilizables**: Sistema de componentes UI completamente modular
- **Sistema de Iconos**: Iconos SVG escalables y consistentes
- **Sistema de Temas**: Variables CSS para fácil personalización y soporte para modo oscuro
- **Separación de Responsabilidades**: Cada componente tiene una responsabilidad específica

###  **Funcionalidades Avanzadas**
- **Página de Login**: Interfaz de autenticación con efectos visuales y validación
- **Dashboard Interactivo**: Panel de control con estadísticas animadas
- **Gestión de Exámenes**: Sistema completo de visualización y administración
- **Filtros Dinámicos**: Navegación por pestañas con estados activos
- **Estados de Carga**: Indicadores de carga y estados de interacción

## 🛠️ Tecnologías Utilizadas

- **React 19.2.0** - Framework principal
- **JavaScript ES6+** - Sintaxis moderna
- **CSS3 Avanzado** - Flexbox, Grid, Custom Properties
- **SVG Icons** - Iconografía escalable
- **CSS Animations** - Transiciones y efectos
- **Create React App** - Herramientas de desarrollo

##  Estructura del Proyecto Mejorada

```
src/
├── components/
│   ├── icons/
│   │   └── Icon.js                    # Sistema de iconos modular
│   ├── ui/
│   │   ├── Button.js & .css           # Componente de botón reutilizable
│   │   ├── Input.js & .css            # Componente de input con validación
│   │   ├── Card.js & .css             # Componente de tarjeta flexible
│   │   ├── SummaryCard.js & .css      # Tarjeta de resumen especializada
│   │   └── ExamCard.js & .css         # Tarjeta de examen con acciones
│   ├── LoginPage.js & .css            # Página de login mejorada
│   └── Dashboard.js & .css            # Dashboard con componentes modulares
├── styles/
│   └── theme.css                      # Sistema de temas con variables CSS
├── App.js                             # Componente principal con routing
├── App.css                            # Estilos globales
└── index.css                          # Estilos base y utilidades
```

##  Componentes UI Modulares

### **Button Component**
- Múltiples variantes: `primary`, `secondary`, `ghost`, `danger`
- Diferentes tamaños: `small`, `medium`, `large`
- Soporte para iconos y estados de carga
- Efectos hover y focus con animaciones

### **Input Component**
- Validación visual y estados de error
- Soporte para iconos y tipos especiales
- Efectos de focus y transiciones suaves
- Accesibilidad completa

### **Card Component**
- Variantes: `default`, `elevated`, `outlined`, `gradient`, `glass`
- Efectos hover y animaciones
- Sistema de padding flexible
- Estados interactivos

### **SummaryCard Component**
- Diseño especializado para estadísticas
- Gradientes y patrones de fondo
- Iconos integrados y animaciones
- Variantes de color temáticas

### **ExamCard Component**
- Información completa del examen
- Tags dinámicos y estados
- Acciones integradas (editar, eliminar)
- Diseño responsive

## 📱 Diseño Responsive

### **Breakpoints Inteligentes**
- **Mobile First**: Diseño optimizado para móviles
- **Tablet**: Adaptaciones para pantallas medianas
- **Desktop**: Experiencia completa en pantallas grandes
- **Ultra-wide**: Soporte para pantallas extra anchas

### **Componentes Adaptativos**
- Grids que se ajustan automáticamente
- Navegación que se convierte en hamburger en móvil
- Tarjetas que se reorganizan según el espacio
- Texto que se escala apropiadamente

##  Animaciones y Micro-interacciones

### **Efectos Visuales**
- **Hover Effects**: Transformaciones suaves en hover
- **Loading States**: Indicadores de carga elegantes
- **Shimmer Effects**: Efectos de brillo en elementos
- **Floating Animations**: Movimientos sutiles de fondo

### **Transiciones Optimizadas**
- **Cubic-bezier**: Curvas de animación naturales
- **Hardware Acceleration**: Uso de transform y opacity
- **Reduced Motion**: Respeto por preferencias de accesibilidad

##  Usuarios de Prueba

- **Admin**: admin@universidad.edu
- **Jefe de Carrera**: jefe@medicina.edu
- **Servicios Escolares**: servicios@universidad.edu
- **Contraseña**: password123

##  Instalación y Ejecución

1. **Instalar dependencias:**
```bash
npm install
```

2. **Ejecutar en modo desarrollo:**
```bash
npm start
```

3. **Abrir en el navegador:**
```
http://localhost:3000
```

## 📋 Scripts Disponibles

- `npm start` - Servidor de desarrollo con hot reload
- `npm test` - Ejecuta las pruebas unitarias
- `npm run build` - Construye la aplicación para producción
- `npm run eject` - Expone la configuración de webpack

##  Mejores Prácticas Implementadas

### **Arquitectura**
-  Componentes funcionales con hooks
-  Separación clara de responsabilidades
-  Reutilización máxima de código
-  Props tipadas y documentadas

### **Estilos**
- CSS modular por componente
- Variables CSS para consistencia
- Mobile-first responsive design
- Accesibilidad y contraste adecuado

### **Performance**
- Componentes optimizados
- Animaciones con hardware acceleration
- Lazy loading de componentes
- Bundle size optimizado

### **UX/UI**
- Micro-interacciones fluidas
- Estados de carga y feedback
- Navegación intuitiva
- Diseño consistente y profesional

## Características Destacadas

### **Login Page Mejorada**
- Fondo con gradiente animado
- Efectos de cristal (glassmorphism)
- Iconos con animaciones shimmer
- Formulario con validación visual

### **Dashboard Avanzado**
- Tarjetas de resumen con gradientes temáticos
- Navegación por pestañas con efectos
- Filtros interactivos con estados
- Lista de exámenes con acciones integradas

### **Sistema de Componentes**
- Biblioteca completa de componentes UI
- Props flexibles y configurables
- Estados y variantes múltiples
- Documentación integrada
