# PROTOCOLO COMPLETO DE PRUEBAS DE USABILIDAD – SMARTPRICE

## 1. Introducción
El presente protocolo describe el proceso metodológico para llevar a cabo una prueba de usabilidad del prototipo **SmartPrice**. La evaluación se centrará en observar la eficiencia, claridad y satisfacción del usuario al completar tareas relacionadas con la comparación de precios, recomendación de tienda, uso del asistente inteligente y gestión de listas de compra.

Las pruebas se realizarán con usuarios primarios representantes del perfil de compradores habituales de supermercados. La herramienta empleada para facilitar las pruebas fue **Useberry**.

**Link de la herramienta:**  
https://app.useberry.com/preview/Jn759P8ZTPvENV/?createPreview  

---

## 2. Objetivo General
Evaluar la usabilidad del prototipo SmartPrice mediante tareas representativas de su flujo principal, analizar la eficacia de la interfaz y detectar áreas de mejora.

---

## 3. Objetivos Específicos
- Medir la facilidad con la que los usuarios consultan y comparan precios entre tiendas.  
- Determinar la comprensión del usuario respecto a la tienda recomendada como opción más conveniente.  
- Evaluar la claridad y utilidad del asistente inteligente.  
- Analizar la facilidad para gestionar listas de compra.  

---

## 4. Casos de Uso Evaluados
- **CU-001:** Consultar y Comparar Precios en Tiempo Real  
- **CU-005:** Recomendar Tienda Más Conveniente  
- **CU-006:** Interactuar con el Asistente Inteligente  
- **CU-011:** Gestionar Listas de Compra  

---

## 5. Indicadores Generales de Usabilidad

### 5.1 Eficiencia
- Tiempo total por tarea (segundos)  
- Número de clics  
- Retrocesos o pasos innecesarios  

### 5.2 Eficacia
- % de tareas completadas  
- Errores cometidos (clics incorrectos, zonas mal seleccionadas, confusión)  
- Veces que se solicitó ayuda  

### 5.3 Satisfacción
- Calificación por tarea (escala de 1 a 5)  
- Comentarios espontáneos  
- Nivel de confianza en la interfaz  

---

## 6. Protocolo de Aplicación

### 6.1 Instrucciones para el Participante
> “Esta prueba no evalúa tus capacidades, sino qué tan clara y útil resulta la plataforma. Por favor, realiza las tareas como lo harías normalmente. Puedes pensar en voz alta si lo deseas.”

### 6.2 Condiciones de la Prueba
- Prototipo accesible en navegación web  
- Moderador sin intervenir salvo cuando sea indispensable  
- Registro continuo de tiempos, errores y comentarios  

---

## 7. Indicaciones del Moderador

### 7.1 Rol del moderador
- Facilitar el proceso sin intervenir en las decisiones del usuario.  
- Mantener neutralidad total.  
- Registrar tiempos, errores, dudas verbales y conductas relevantes.  
- Evitar influir en la navegación o en las respuestas.  

### 7.2 Frases permitidas
- “Realiza la tarea como lo harías normalmente.”  
- “No hay respuestas correctas o incorrectas.”  
- “Estamos evaluando la interfaz, no tu desempeño.”  
- “Puedes pensar en voz alta si lo deseas.”  
- “Indica cuando hayas terminado.”  

### 7.3 Frases prohibidas
El moderador **NO** debe:
- ❌ Guiar sobre dónde hacer clic  
- ❌ Validar explícitamente si están en lo correcto  
- ❌ Describir funcionalidad oculta  
- ❌ Decir “aquí está”, “es este botón”, “busca abajo”, etc.  

### 7.4 Cómo responder dudas del usuario

**Si preguntan:** “¿Dónde le doy clic?”  
➡ “Haz lo que considerarías natural en una aplicación de compras.”

**Si preguntan:** “¿Aquí debo entrar?”  
➡ “Realiza la acción que creas adecuada.”

**Si preguntan:** “¿Voy bien?”  
➡ “No evaluamos tu desempeño, solo observa la interfaz y actúa con naturalidad.”

### 7.5 Intervención en bloqueos
Si el usuario se detiene más de **20–25 segundos**, el moderador puede decir:  
➡ “Intenta realizarlo como lo harías en una situación real.”

---

## 8. Desarrollo de la Prueba

El moderador explicará al inicio:

“Esta prueba no evalúa tus habilidades, sino qué tan clara es la plataforma. Puedes pensar en voz alta. Realiza cada tarea como lo harías de forma natural.”

El moderador no interviene durante la ejecución, excepto para registrar métricas.

---

# CU-001 – Consultar y Comparar Precios  

### **Tarea 1: Buscar un producto**
**Indicador:**  
- Tiempo de búsqueda del producto.

**Criterios:**  
- Identifica la barra de búsqueda.  
- Escribe correctamente el nombre del producto.  
- Los resultados coinciden con lo escrito.  
- No muestra confusión en el procedimiento.

**Indicaciones del moderador:**  
- “Por favor, busca el producto indicado.”  
- Registrar tiempo.  
- No guiar la ubicación de la barra de búsqueda.  

---

### **Tarea 2: Interpretar los resultados**
**Indicador:**  
- Tiempo para identificar el precio más bajo.

**Criterios:**  
- Comprende precios, tiendas y estructura de la lista.  
- Identifica correctamente cuál oferta conviene más.  
- La información se lee con claridad.

**Moderador:**  
- “Indica cuando encuentres el precio más bajo.”  
- Registrar dudas verbales.  

---

### **Tarea 3: Evaluar facilidad del comparador**
**Indicador:**  
- Claridad de la vista comparativa (escala 1–5).

**Criterios:**  
- Explica si la comparación fue clara o confusa.  
- Reconoce diferencias de precios sin problema.  
- Identifica si la interfaz ayudó (orden, colores, íconos).

**Moderador:**  
- Pregunta abierta: “¿Te pareció clara la comparación de precios? ¿Por qué?”  

---

# CU-005 – Recomendar Tienda Más Conveniente  

### **Tarea 1: Seleccionar la tienda recomendada**
**Indicador:**  
- Tasa de selección correcta.

**Criterios:**  
- Identifica la etiqueta “Recomendada”.  
- La tienda está visualmente destacada.  
- La selecciona sin dudar ni buscar demasiado.

**Moderador:**  
- “Selecciona la tienda que consideres más conveniente.”  
- No decir cuál está recomendada.  

---

### **Tarea 2: Verificar la lógica de la recomendación**
**Indicador:**  
- Comprensión de la razón de la recomendación.

**Criterios:**  
- Comprende los factores: precio + distancia.  
- La explicación coincide con los datos en interfaz.  
- No expresa confusión sobre la lógica.

**Moderador:**  
- Pregunta abierta: “¿Por qué crees que el sistema recomendó esa tienda?”  

---

### **Tarea 3: Identificar visualmente la tienda recomendada**
**Indicador:**  
- Tiempo de identificación visual de la tienda recomendada.

**Criterios:**  
- Reconoce la etiqueta o distintivo sin confusión.  
- Interpreta correctamente el resultado.  
- No selecciona por error otra tienda.

**Moderador:**  
- Registrar tiempo desde que observa la pantalla.  

---
 
# CU-006 – Interactuar con el Asistente Inteligente  

### **Tarea 1: Abrir el chatbot**
**Indicador:**  
- Tiempo para abrir el chatbot.

**Criterios:**  
- Encuentra el ícono sin ayuda.  
- Accede sin pasos adicionales.  
- No abre secciones equivocadas.

**Moderador:**  
- “Por favor, accede al asistente inteligente.”  

---

### **Tarea 2: Conversar con el chatbot**
Preguntas obligatorias:
1. ¿Dónde encuentro el precio más bajo para este producto?  
2. ¿Qué tienda está más cerca con buen precio?  
3. ¿Este producto tiene alguna oferta o promoción?

**Indicador:**  
- Exactitud percibida de la respuesta del chatbot.

**Criterios:**  
- Entiende las respuestas.  
- Navega sin perderse entre chatbot y pantalla principal.  
- Interpreta correctamente sugerencias o enlaces.

**Moderador:**  
- “Realiza las tres preguntas indicadas previamente.”  

---

### **Tarea 3: Opinión del chatbot**
**Indicador:**  
- Utilidad percibida de las respuestas del chatbot.

**Criterios:**  
- Entiende la información.  
- Reconoce si es útil o insuficiente.  
- No muestra confusión relevante sobre el contenido.

**Moderador:**  
- Pregunta abierta: “¿Qué tan útil consideras la respuesta del asistente?”  

---
 
# CU-011 – Gestionar Lista de Compras  

### **Tarea 1: Crear una lista**
**Indicador:**  
- Tiempo para crear una nueva lista.

**Criterios:**  
- Agrega productos sin errores.  
- Encuentra “Crear nueva lista”.  
- La lista se guarda correctamente.

**Moderador:**  
- “Crea una nueva lista con los productos que seleccionaste.”  

---

### **Tarea 2: Visualizar total**
**Indicador:**  
- Claridad del total y desglose  
  *(≥85% deben identificarlo correctamente).*

**Criterios:**  
- Identifica el total fácilmente.  
- Comprende el desglose.  
- Interpreta correctamente el ahorro.

**Moderador:**  
- “Indica cuando puedas visualizar el total de la lista.”  

---

### **Tarea 3: Dificultad percibida al crear una lista**
**Indicador:**  
- Nivel de dificultad percibida de crear una lista.

**Criterios:**  
- Explica si fue fácil o difícil.  
- Identifica cualquier paso confuso.  
- Evalúa si usaría esta función en la vida real.

**Moderador:**  
- Pregunta abierta: “¿Fue fácil crear una lista? ¿Por qué?”  
