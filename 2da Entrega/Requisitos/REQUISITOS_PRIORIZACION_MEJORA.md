# 🧩 REQUISITOS FUNCIONALES  
### Método de priorización: **MoSCoW**

---

## 🟢 RF1 — Integración de APIs de Supermercados
**Descripción:**  
Conexión automática a 5 supermercados principales (Walmart, Soriana, Chedraui, Bodega Aurrera, La Comer) para obtener precios actualizados, disponibilidad y ubicaciones de los productos cada 30 minutos.  

**Justificación:**  
Es el pilar que impulsa toda la aplicación, pues es el mecanismo técnico que permite al sistema comunicarse directamente con las bases de datos de los supermercados. Gracias a esta integración, se obtienen los precios, productos y actualizaciones en tiempo real, por lo que su implementación resulta indispensable para el funcionamiento principal de la aplicación.

---

## 🟢 RF2 — Historial de Precios
**Descripción:**  
El sistema guarda cada cambio de precio durante 12 meses. Muestra gráficas de evolución y detecta patrones de subidas y bajadas.  

**Justificación:**  
Es el motor de la inteligencia de la aplicación, ya que permite analizar la evolución de los precios a lo largo del tiempo. Gracias a esta información, el sistema puede generar patrones, ofrecer recomendaciones más precisas y anticiparse a posibles variaciones de costo. Esto posibilita que la aplicación evolucione de una herramienta básica a un asesor de compras verdaderamente inteligente y proactivo.

---

## 🟢 RF3 — Comparación de Precios en Tiempo Real
**Descripción:**  
Tabla comparativa con precio por supermercado, precio por kg/l, porcentaje de diferencia, disponibilidad y distancia a tienda.  

**Justificación:**  
Es el núcleo de la aplicación, pues representa la funcionalidad principal que aporta valor al usuario. Permite comparar precios de un mismo producto entre diferentes supermercados en tiempo real, ayudando a identificar dónde conviene comprar. Sin esta función, la aplicación perdería su valor como herramienta de ahorro y eficiencia.

---

## 🟢 RF4 — Predicción de Precios con IA
**Descripción:**  
IA analiza histórico de precios y predice cambios en los próximos 7, 14 y 30 días. Muestra gráficas con predicción y nivel de confianza.  

**Justificación:**  
Aunque la aplicación puede operar solo mediante la comparación de precios, la incorporación de predicciones mediante IA mejora la toma de decisiones del usuario y aumenta la relevancia del proyecto a largo plazo.

---

## 🟡 RF5 — Validación de Confiabilidad de Ofertas
**Descripción:**  
Analiza historial de ofertas y asigna nivel de confianza:  
- **ALTA** (>7 días)  
- **MEDIA** (3–7 días)  
- **BAJA** (<3 días)  

Muestra duración esperada y descuento real.  

**Justificación:**  
Esta funcionalidad utiliza datos históricos para evaluar la confiabilidad de las ofertas, aportando inteligencia adicional al sistema. Aunque mejora la precisión, no es esencial para la operación básica.

---

## 🟢 RF6 — Geolocalización y Recomendación Inteligente
**Descripción:**  
Solicita ubicación (con permiso) y calcula distancia a cada tienda.  
Tres modos disponibles:  
- 🏷️ *Mejor Precio*  
- 📍 *Más Cercano*  
- ⚖️ *Balance*  

Muestra mapa con tiendas y tiempo estimado.  

**Justificación:**  
Esencial para cumplir con el propósito central: ayudar al usuario a encontrar dónde le conviene comprar. Integra la ubicación geográfica como un factor clave, convirtiendo la app en una herramienta realmente útil y práctica.

---

## 🟢 RF7 — Asistente Virtual Inteligente
**Descripción:**  
Chatbot que entiende lenguaje natural: busca productos, responde preguntas sobre precios, hace recomendaciones y mantiene conversación. Usa información de precios y Profeco.  

**Justificación:**  
Transforma la aplicación en un asistente personal de compras inteligente. Permite interactuar mediante lenguaje natural y recibir recomendaciones personalizadas, diferenciando la app de la competencia.

---

## 🟢 RF8 — Validación con Datos de Profeco
**Descripción:**  
Consulta semanal información pública de Profeco (“Quién es Quién en los Precios”) y compara con precios de supermercados. Muestra sello “Validado por Profeco” en coincidencias.  

**Justificación:**  
Añade credibilidad y validación oficial a la aplicación. Aunque no indispensable, incrementa la confianza del usuario en la información.

---

## 🟢 RF9 — Gestión de Usuarios y Preferencias
**Descripción:**  
Permite crear cuenta (registro con email y contraseña) e iniciar sesión. Los usuarios pueden guardar supermercados favoritos, ubicación habitual, productos seguidos y alertas personalizadas de precios.  

**Justificación:**  
Clave para ofrecer una experiencia personalizada. Sin esta función, no habría fidelización ni servicio adaptado al usuario.

---

## 🟢 RF10 — Sistema de Notificaciones
**Descripción:**  
Envía notificaciones web/móvil y por email cuando un producto seguido baja cierto porcentaje, hay ofertas especiales o se alcanza un precio objetivo.  
El usuario configura frecuencia, canal y porcentaje.  

**Justificación:**  
Fundamental para alertar al usuario sobre cambios relevantes. Sin este sistema, no se aprovecharían las oportunidades de ahorro en tiempo real.

---

## 🟡 RF11 — Gestión de Listas de Compra
**Descripción:**  
Permite crear, editar y eliminar listas de compra. Los usuarios pueden agregar productos con cantidades específicas.  
Muestra costo total por supermercado, ahorro potencial vs tienda más cara y recomienda la mejor opción.  

**Justificación:**  
Mejora la experiencia del usuario al permitirle planificar y controlar sus compras. Aunque no esencial, aporta gran valor práctico.

---

## 🟢 RF12 — Reporte de Discrepancias
**Descripción:**  
Incluye botón “Reportar precio incorrecto” en cada producto.  
Los usuarios indican tienda, precio real, evidencia opcional (foto de ticket o estante) y comentarios.  
Los reportes se almacenan para análisis y validación; si varios coinciden, se marca para revisión prioritaria.  

**Justificación:**  
Garantiza transparencia y confiabilidad de la información. Permite mantener la precisión de los datos y fortalecer la credibilidad del sistema.

---

# 🔶 PRIORIZACIÓN  
| Nivel | Descripción |
|:------|:-------------|
| **MUST HAVE** | Requisitos esenciales para el funcionamiento principal de la aplicación. |
| **SHOULD HAVE** | Requisitos importantes que mejoran significativamente la experiencia del usuario. |
| **COULD HAVE** | Requisitos opcionales que agregan valor o innovación adicional. |
