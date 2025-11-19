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

## Indicadores y Criterios por Tarea

### Tarea 1: CU-001 - Comparar Precios de un Producto Específico

**Escenario:** 
"Imagina que necesitas comprar aceite en mayoreo y quieres encontrar la opción más económica disponible hoy. Usando la barra de búsqueda en la parte superior, busca 'aceite' y selecciona la opción más barata que encuentres entre todos los supermercados."

**Preguntas durante la tarea:**
- ¿Cómo decidiste cuál opción era la más barata?
- ¿La información de precios y supermercados te pareció clara a simple vista?
- ¿Qué fue lo primero que miraste al ver los resultados?

**Indicadores Específicos:**
- **Precisión en la selección:** Capacidad para identificar correctamente el producto más barato
- **Velocidad de toma de decisión:** Eficiencia en encontrar y seleccionar la opción correcta
- **Autonomía del usuario:** Grado en que puede completar la tarea sin asistencia

| Criterio de Éxito | Métrica Esperada | Variable |
| :--- | :--- | :--- |
| Completitud autónoma | Selecciona la opción más barata sin ayuda | **COMPLETÓ SIN AYUDA = SÍ** |
| Tolerancia a errores | Comete 2 o menos errores | **ERRORES COMETIDOS ≤ 2** |
| Eficiencia temporal | Completa la tarea en ≤ 20 segundos | **TIEMPO ≤ 20s** |
| Eficiencia en clicks | Realiza ≤ 5 clicks para completar la tarea | **CLICKS ≤ 5** |
| Satisfacción subjetiva | Muestra nivel de frustración bajo (Nivel 1 o 2) | **FRUSTRACIÓN = 1 o 2** |

---

### Tarea 2: CU-002 - Revisar Evolución de Precios

**Escenario:**
"Estás considerando comprar arroz pero quieres saber si los precios han estado subiendo o bajando. Desde la página de resultados del arroz, accede al historial de precios e identifica cuál ha sido el precio más bajo de los últimos 6 meses."

**Preguntas durante la tarea:**
- ¿Fue fácil encontrar el historial de precios?
- ¿La gráfica ayuda a entender la tendencia?
- ¿Comprarías hoy o esperarías?

**Indicadores Específicos:**
- **Navegación exitosa al historial:** Capacidad para encontrar la funcionalidad de historial de precios
- **Interpretación correcta de datos:** Comprensión de la gráfica y extracción de información solicitada
- **Eficiencia en el flujo:** Número de errores cometidos durante la navegación

| Criterio de Éxito | Métrica Esperada | Variable|
| :--- | :--- | :--- |
| Acceso autónomo | Accede al historial sin ayuda | **COMPLETÓ SIN AYUDA = SÍ** |
| Precisión interpretativa | Identifica correctamente el precio más bajo | *(Verificar en **OBSERVACIONES**)* |
| Tolerancia a errores | Comete 1 o menos errores de navegación | **ERRORES COMETIDOS ≤ 1** |
| Eficiencia temporal | Completa la tarea en ≤ 15 segundos | **TIEMPO ≤ 15s** |
| Eficiencia en clicks | Realiza ≤ 3 clicks para acceder al historial | **CLICKS ≤ 3** |
| Coherencia decisional | Decisión coherente con tendencia observada | *(Verificar en **OBSERVACIONES**)* |
| Satisfacción subjetiva | Muestra nivel de frustración bajo (Nivel 1 o 2) | **FRUSTRACIÓN = 1 o 2** |

---

### Tarea 3: CU-005 - Encontrar la Mejor Opción por Ubicación

**Escenario:**
"Necesitas comprar leche urgentemente y quieres el equilibrio perfecto entre precio y cercanía. Dirígete a la sección de comparar precios, busca 'leche' y agrega al carrito el producto que el sistema recomiende como más conveniente."

**Preguntas durante la tarea:**
- ¿Entiendes por qué recomienda esa tienda?
- ¿La información de distancia y precio es clara?
- ¿Confiarías en esta recomendación?

**Indicadores Específicos:**
- **Comprensión del algoritmo de recomendación:** Entiende los criterios detrás de la sugerencia del sistema
- **Confianza en la sugerencia del sistema:** Grado de aceptación y actuación sobre la recomendación
- **Evaluación de criterios múltiples:** Capacidad para considerar precio y ubicación simultáneamente

| Criterio de Éxito | Métrica Esperada | Variable |
| :--- | :--- | :--- |
| Acción basada en recomendación | Agrega producto recomendado sin ayuda | **COMPLETÓ SIN AYUDA = SÍ** |
| Comprensión transparente | Explica con sus palabras por qué se recomienda | *(Verificar en **OBSERVACIONES**)* |
| Tolerancia a errores | Comete 1 o menos errores en el proceso | **ERRORES COMETIDOS ≤ 1** |
| Eficiencia temporal | Completa la tarea en ≤ 30 segundos | **TIEMPO ≤ 30s** |
| Eficiencia en clicks | Realiza ≤ 8 clicks para completar la tarea | **CLICKS ≤ 8** |
| Confianza demostrada | Expresa confianza en la recomendación | **FRUSTRACIÓN = 1 o 2** |

---

### Tarea 4: CU-006 - Consultar al Asistente Virtual

**Escenario:**
"Tienes preguntas sobre productos en oferta esta semana."

**Tarea concreta:**
"Haz clic en el ícono del chatbot y pregúntale: '¿Dónde encuentro la mejor oferta en leche?' Luego sigue una recomendación."

**Preguntas durante la tarea:**
- ¿La respuesta fue útil?
- ¿La interacción se sintió natural?
- ¿Preferirías esta búsqueda sobre la tradicional?

**Indicadores Específicos:**
- **Descubribilidad del chatbot:** Facilidad para encontrar y acceder al asistente virtual
- **Efectividad de la interacción:** Capacidad para obtener información útil mediante el chatbot
- **Calidad de la experiencia conversacional:** Naturalidad y utilidad percibida de la interacción

| Criterio de Éxito | Métrica Esperada | Variable|
| :--- | :--- | :--- |
| Acceso autónomo | Localiza chatbot y envía pregunta sin ayuda | **COMPLETÓ SIN AYUDA = SÍ** |
| Eficiencia en interacción | Comete 1 o menos errores en el proceso | **ERRORES COMETIDOS ≤ 1** |
| Eficiencia temporal | Completa la interacción en ≤ 35 segundos | **TIEMPO ≤ 35s** |
| Eficiencia en clicks | Realiza ≤ 4 clicks para iniciar conversación | **CLICKS ≤ 4** |
| Utilidad percibida | Considera la respuesta como útil | **FRUSTRACIÓN = 1 o 2** |
| Naturalidad de uso | La interacción se siente fluida y natural | *(Verificar en **OBSERVACIONES**)* |

---

### Tarea 5: CU-011 - Crear y Calcular una Lista de Compra

**Escenario:**
"Estás planificando tu compra semanal. Crea una lista llamada 'Mi compra semanal', agrega 3 productos y revisa en qué supermercado es más económica."

**Preguntas durante la tarea:**
- ¿Fue sencillo crear la lista y agregar productos?
- ¿La comparación de totales es clara?
- ¿Usarías esta función en la vida real?

**Indicadores Específicos:**
- **Finalización exitosa del flujo multi-paso:** Capacidad para completar secuencia compleja de acciones
- **Manejo de funcionalidades complejas:** Competencia en usar múltiples herramientas integradas
- **Comprensión de resultados comparativos:** Interpretación correcta de análisis entre supermercados

| Criterio de Éxito | Métrica Esperada | Variable|
| :--- | :--- | :--- |
| Completitud del flujo | Crea lista con +2 productos y revisa comparación | **COMPLETÓ SIN AYUDA = SÍ** |
| Manejo de complejidad | Comete 2 o menos errores en todo el flujo | **ERRORES COMETIDOS ≤ 2** |
| Eficiencia temporal | Completa la tarea en ≤ 45 segundos | **TIEMPO ≤ 45s** |
| Eficiencia en clicks | Realiza ≤ 12 clicks para completar todo el flujo | **CLICKS ≤ 12** |
| Comprensión comparativa | Identifica correctamente supermercado más económico | *(Verificar en **OBSERVACIONES**)* |
| Tolerancia a frustración | Muestra frustración baja o media (Nivel 1, 2 o 3) | **FRUSTRACIÓN ≤ 3** |

---

### Instrucciones Generales:
1. **Preparación:** Tener cronómetro y contador de clicks listos
2. **Inicio:** Leer el escenario en voz clara y comenzar cronómetro cuando el usuario inicie la acción
3. **Monitoreo:** Contar clicks en silencio y registrar errores discretamente
4. **Preguntas:** Realizar preguntas específicas durante o inmediatamente después de cada tarea
5. **Registro:** Completar plantilla inmediatamente después de cada tarea

### Preguntas Finales de Retroalimentación:
1. ¿Qué funcionalidad te pareció más útil y por qué?
2. ¿Qué te frustró o confundió más durante las tareas?
3. ¿Qué tan probable es que uses SmartPrice regularmente? (1 a 5)
4. ¿Qué funcionalidad extra o mejora agregarías?
5. ¿Recomendarías la plataforma? ¿Por qué?

---

