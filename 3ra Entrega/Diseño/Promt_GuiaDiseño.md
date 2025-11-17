# Documentación del Prompt y Guía de Diseño — SmartPrice

## Índice
1. [Introducción](#introducción)
2. [Prompt utilizado para generar el prototipo](#1-prompt-utilizado-para-generar-el-prototipo)
3. [Guía de Diseño completa](#2-guía-de-diseño-completa)
   - [1. Sistema de Diseño](#21-sistema-de-diseño)
   - [2. Componentes UI](#22-componentes-ui)
   - [3. Patrones de Interacción](#23-patrones-de-interacción)
   - [4. Layout y Grid System](#24-layout-y-grid-system)
   - [5. Componentes Específicos](#25-componentes-específicos)
   - [6. Guías Responsive](#26-guías-responsive)
   - [7. Accesibilidad](#27-accesibilidad)
   - [8. Iconografía](#28-iconografía)
   - [9. Animaciones](#29-animaciones)
   - [10. Guías de Contenido](#210-guías-de-contenido)
   - [11. Sistema de Estados](#211-sistema-de-estados)
   - [12. Consideraciones Técnicas](#212-consideraciones-técnicas)

---

# Introducción

Durante el desarrollo del prototipo de SmartPrice, se emplearon herramientas de Inteligencia Artificial para generar tanto el código base como la estructura visual del diseño.

Este documento integra:

- El **prompt original** utilizado para solicitar el prototipo a la IA.  
- La **guía de diseño completa**, que establece los lineamientos visuales, tipográficos, espaciales y de interacción para la interfaz.

Toda la información se presenta a continuación en formato Markdown, tal como se usará en el repositorio del proyecto.

---

# 1. Prompt utilizado para generar el prototipo

```markdown
Soy un desarrollador de software y estoy creando un mockup de alta fidelidad no funcional para una aplicación llamada SmartPrice, enfocada en comparar precios de productos básicos entre supermercados en México (principalmente en Mérida, Yucatán). Necesito que generes el diseño completo (UI) y la estructura de código base del proyecto con HTML5, CSS3 y Python (usando Flask). El resultado debe ser organizado, profesional y visualmente atractivo, siguiendo todas las especificaciones de este prompt.

Estilo general y branding  
Paleta de colores principal:  
Azul: #24A9DC  
Naranja: #EB692C  
Blanco: #FFFFFF  
Verde acento: #36C07E  
Texto: negro #000000  
Tono visual: moderno, limpio, cercano y fácil de usar.  
Tipografía: Sans-serif moderna, elegante y legible (por ejemplo, Poppins, Inter o Montserrat).  
Logo: texto “SmartPrice” con un carrito de supermercado minimalista.  
Tono del lenguaje en la UI: casual, amigable y empático.  
Plataforma: principalmente móvil (responsive), adaptable también a web.

Pantallas del mockup  
- Splash / Próximamente  
- Registro / Inicio de sesión  
- Home / Principal  
- Buscador de productos  
- Comparador de precios  
- Mapa de tiendas  
- Detalle de producto  
- Carrito simulador / plan de compra  
- Chat asistente  
- Perfil de usuario / ajustes  
- Pantalla de error / sin conexión  

Requisitos técnicos  
Lenguajes: HTML5, CSS3, Python (Flask).  
Framework: Bootstrap 5.  
Organización del proyecto (estructura de carpetas).  
Código bien comentado.  
Microinteracciones.  
Datos de ejemplo basados en productos reales.  

Requisitos funcionales y no funcionales  
(RF1–RF12 incluidos íntegramente en el documento original).  

Detalles adicionales  
Compatibilidad con VS Code.  
Ejecución por terminal.  
Servidor Flask básico con rutas principales.  
README.md incluido.  

Objetivo final  
Crear un mockup completo, visualmente atractivo y ordenado que simule los procesos principales de SmartPrice.
