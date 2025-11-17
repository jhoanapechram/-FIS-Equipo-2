# Prompt y Guía de Diseño — SmartPrice

## Introducción
Para el desarrollo del prototipo de SmartPrice, se utilizaron herramientas de Inteligencia Artificial tanto para generar la estructura del código como para definir la interfaz visual inicial.  
Este documento reúne dos elementos fundamentales del proceso:

1. El **prompt completo** que se proporcionó a la IA para generar el diseño y la estructura base del proyecto.
2. La **guía de diseño** utilizada para dar forma a la identidad visual y a los componentes UI del proyecto.

Toda la información fue extraída directamente de los documentos originales.

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


## Guía de diseño
---

# 2. Guía de Diseño completa

A continuación se presenta íntegramente la guía de diseño utilizada para el prototipo.  
Se conservaron los emojis, la estructura y el contenido original.

---

## Sistema de Diseño 🎨

### Paleta de Colores
**Colores principales:**  
- Azul primario (#1e88e5)  
- Naranja acento (#ff6d00)  
- Morado secundario (#5e35b1)  
- Verde éxito (#43a047)

**Colores neutros:**  
- Fondo muy claro (#f8fafc)  
- Paneles (#ffffff)  
- Texto principal (#333333)  
- Texto secundario (#546e7a)  
- Texto claro (#78909c)

**Efectos visuales:**  
- Sombra  
- Sombra hover  
- Glassmorphism ❄️

---

## Tipografía ✍️

**Familia:** "Poppins", sans-serif  

**Escala tipográfica:**  
- h1 — 44.8px  
- h2 — 37.3px  
- h3 — 31.1px  
- h4 — 24.8px  
- h5 — 20.7px  
- h6 — 17.3px  
- Texto base — 14.4px  
- Texto pequeño — 12px  

**Pesos:** desde 300 hasta 800.

---

## Espaciado y Bordes 📏

Unidades:  
- 4px  
- 8px  
- 16px  
- 24px  
- 32px  

Border radius:  
- 8px  
- 12px  
- 16px  
- 20px  
- Circular  

---

# Componentes UI 🧩

## Botones  
- Botones primarios con gradiente azul → morado ✨  
- Botones secundarios en color naranja  
- Estados: normal, hover, active, disabled  
- Transiciones suaves  

## Tarjetas  
- Fondo con gradiente  
- Sombra suave  
- Bordes redondeados  
- Elevación en hover  

## Campos de formulario  
- Inputs con sombra ligera  
- Bordes redondeados  
- Estados: focus, error, éxito  

## Navegación  
- Barra superior con glassmorphism  
- Navegación inferior para dispositivos móviles 📱  

---

# Patrones de Interacción 🔁

## Hover  
- Aumento de elevación  
- Cambio de sombra  

## Transiciones  
- Animaciones suaves  

## Feedback visual  
- Notificaciones tipo toast 🔔  

---

# Layout y Grid System 📐

## Rejilla  
- Grid responsive  
- Columnas auto-ajustables  

## Contenedores  
- Máximo de 1200px  
- Padding lateral  

---

# Componentes Específicos 🛒

## Tarjetas de producto  
- Imagen del producto  
- Nombre  
- Precio  
- Badge de oferta 🔖  

## Badges  
Colores según significado:  
- Verde: ahorro  
- Naranja: tendencia  
- Morado: información  

## Gráficas  
- Barras animadas  
- Comparación de precios 📊  

---

# Guías Responsive 📱💻

Breakpoints para:  
- Móvil  
- Móvil pequeño  
- Tablet  

Patrones móviles:  
- Navegación inferior  
- Contenido apilado  
- Elementos táctiles amplios  

---

# Accesibilidad ♿  
- Cumplimiento de contraste AA  
- Estados de foco visibles  
- Accesibilidad por teclado  

---

# Iconografía 🔣  
- Uso de emojis como iconos  
- Representación visual mediante símbolos  

---

# Animaciones ✨  
- Fade-in  
- Estado de carga del chat  
- Transiciones suaves  

---

# Guías de Contenido 📝  
- Tono cercano y claro  
- Placeholders descriptivos  
- Textos de error orientados al usuario  

---

# Sistema de Estados 📈  
- Tendencia al alza  
- Tendencia a la baja  
- Ofertas  
- Estados de validación  

---

# Consideraciones Técnicas 🛠️  
- Optimización de imágenes  
- Persistencia con localStorage  
- Lazy loading  
- Arquitectura modular en JavaScript  
