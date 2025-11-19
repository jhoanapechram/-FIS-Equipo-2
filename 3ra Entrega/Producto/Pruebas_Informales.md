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

### Instrucciones para el Moderador

**Contexto:**  
“Hoy vas a probar una plataforma llamada SmartPrice que te ayuda a comparar precios de supermercados en tiempo real. Te voy a pedir que completes algunas tareas concretas mientras piensas en voz alto. No hay respuestas correctas o incorrectas — estamos probando el sistema, no a ti.”

---

## **Tarea 1: Comparar Precios de un Producto Específico (CU-001)**

**Escenario:**  
“Imagina que necesitas comprar aceite en mayoreo y quieres encontrar la opción más económica disponible hoy. Usando la barra de búsqueda en la parte superior, busca ‘aceite’ y selecciona la opción más barata que encuentres entre todos los supermercados.”

**Preguntas durante la tarea:**
- ¿Cómo decidiste cuál opción era la más barata?  
- ¿La información de precios y supermercados te pareció clara a simple vista?  
- ¿Qué fue lo primero que miraste al ver los resultados?  

**Meta/expectativa:**  
Los usuarios deben percibir la información proporcionada como clara, entendible y fácil de analizar.

### Indicador: **Tiempo de búsqueda y selección**
Mide el tiempo desde que escribe “aceite de oliva” hasta que selecciona la opción más económica.

**Criterios:**  
- Completa la tarea sin ayuda del moderador.  
- Identifica correctamente la opción más económica.  
- Respuestas coherentes con lo observado.  
- Tiempo esperado: **20 segundos o menos**.  

---

## **Tarea 2: Revisar Evolución de Precios (CU-002)**

**Escenario:**  
“Estás considerando comprar arroz pero quieres saber si los precios han estado subiendo o bajando. Desde la página de resultados del arroz, accede al historial de precios e identifica cuál ha sido el precio más bajo de los últimos 6 meses.”

**Preguntas durante la tarea:**
- ¿Fue fácil encontrar el historial de precios?  
- ¿La gráfica ayuda a entender la tendencia?  
- ¿Comprarías hoy o esperarías?  

**Meta/expectativa:**  
Acceder al historial sin pasos innecesarios o errores.

### Indicador: **Número de errores**
Cuenta clics incorrectos, secciones equivocadas o confusiones.

**Criterios:**  
- Encuentra el historial sin ayuda.  
- Interpreta la gráfica sin confusión.  
- Coherencia entre análisis y decisión.  
- Tiempo esperado: **15 segundos o menos**.  

---

## **Tarea 3: Encontrar la Mejor Opción por Ubicación (CU-005)**

**Escenario:**  
“Necesitas comprar leche urgentemente y quieres el equilibrio perfecto entre precio y cercanía. Dirígete a la sección de comparar precios, busca ‘leche’ y agrega al carrito el producto que el sistema recomiende como más conveniente.”

**Preguntas durante la tarea:**
- ¿Entiendes por qué recomienda esa tienda?  
- ¿La información de distancia y precio es clara?  
- ¿Confiarías en esta recomendación?  

**Meta/expectativa:**  
El usuario debe comprender y confiar en la recomendación.

### Indicador: **Tiempo en realizar la comparación**
Mide el tiempo en identificar la sección, comprender la recomendación y agregar el producto.

**Criterios:**  
- Encuentra la sección sin dificultades.  
- Comprende por qué se recomienda esa tienda.  
- Compara precios y distancia sin problemas.  
- Tiempo esperado: **30 segundos o menos**.  

---

## **Tarea 4: Consultar al Asistente Virtual (CU-006)**

**Escenario:**  
“Tienes preguntas sobre productos en oferta esta semana.”

**Tarea concreta:**  
“Haz clic en el ícono del chatbot y pregúntale: ‘¿Dónde encuentro la mejor oferta en leche?’ Luego sigue una recomendación.”

**Preguntas durante la tarea:**
- ¿La respuesta fue útil?  
- ¿La interacción se sintió natural?  
- ¿Preferirías esta búsqueda sobre la tradicional?  

**Meta/expectativa:**  
Encontrar e interactuar con el chatbot fácilmente.

### Indicador: **Número de errores al localizar y usar el chatbot**
Cuenta clics incorrectos o confusiones.

**Criterios:**  
- Localiza el chatbot sin ayuda.  
- Usa preguntas sugeridas sin dificultad.  
- Comprende la información dada.  
- Tiempo esperado: **35 segundos o menos**.  

---

## **Tarea 5: Crear y Calcular una Lista de Compra (CU-011)**

**Escenario:**  
“Estás planificando tu compra semanal. Crea una lista llamada ‘Mi compra semanal’, agrega 3 productos y revisa en qué supermercado es más económica.”

**Preguntas durante la tarea:**
- ¿Fue sencillo crear la lista y agregar productos?  
- ¿La comparación de totales es clara?  
- ¿Usarías esta función en la vida real?  

**Meta/expectativa:**  
Completar todo el flujo sin confusión.

### Indicador: **Número de errores**
Clics incorrectos, dudas al nombrar lista, errores al agregar productos o localizar la comparación.

**Criterios:**  
- Crea la lista sin ayuda.  
- Agrega al menos 2 productos.  
- Entiende la comparación.  
- Identifica supermercados más económicos.  

---

## Preguntas Finales de Retroalimentación
1. ¿Qué funcionalidad te pareció más útil y por qué?  
2. ¿Qué te frustró o confundió más durante las tareas?  
3. ¿Qué tan probable es que uses SmartPrice regularmente? (1 a 5)  
4. ¿Qué funcionalidad extra o mejora agregarías?  
5. ¿Recomendarías la plataforma? ¿Por qué?  

---

## Checklist del Moderador
- [ ] Verificar que el mockup esté cargado correctamente  
- [ ] Asegurar que el participante piense en voz alta  
- [ ] Tomar notas sobre confusiones o pausas  
- [ ] Mantener actitud neutral y de apoyo



