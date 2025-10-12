# Requisitos Funcionales y No Funcionales — SmartPrice

---

## 🧩 REQUISITOS FUNCIONALES

| ID   | Requisito | Descripción | Verificación |
|------|------------|--------------|---------------|
| **RF1** | **Integración de APIs de Supermercados** | Conexión automática a 5 supermercados principales (Walmart, Soriana, Chedraui, Bodega Aurrera, La Comer) para obtener precios actualizados, disponibilidad y ubicaciones cada 30 minutos. | 100 pruebas de consulta por supermercado, verificando al menos 95 respuestas correctas. Comprobación de tiempos de actualización en registros del sistema. |
| **RF2** | **Historial de Precios** | Sistema guarda cada cambio de precio durante 12 meses. Muestra gráficas de evolución y detecta patrones de subidas y bajadas. | Base de datos con 100,000 registros de prueba y 20 consultas de tendencias, verificando respuesta en menos de 2 segundos. |
| **RF3** | **Comparación de Precios en Tiempo Real** | Tabla comparativa con precio por supermercado, precio por kg/lt, porcentaje de diferencia, disponibilidad y distancia a tienda. | 20 búsquedas de diferentes productos midiendo tiempo de respuesta. Verificación visual de indicadores “mejor precio” y “más cercano”. |
| **RF4** | **Predicción de Precios con IA** | IA analiza histórico de precios y predice cambios en próximos 7, 14 y 30 días. Muestra gráficas con predicción y nivel de confianza. | Modelo entrenado con 6 meses de datos históricos, evaluado con datos reales. Deberá tener un error promedio menor al 15%. |
| **RF5** | **Validación de Confiabilidad de Ofertas** | Analiza historial de ofertas y asigna nivel de confianza: **ALTA (>7 días), MEDIA (3–7 días), BAJA (<3 días)**. Muestra duración esperada y descuento real. | 10 productos con ofertas verificados manualmente. Validación de clasificación y porcentajes de descuento. |
| **RF6** | **Geolocalización y Recomendación Inteligente** | Solicita ubicación (con permiso) y calcula distancia a cada tienda. Tres modos: *“Mejor Precio”*, *“Más Cercano”*, *“Balance”*. Mapa con tiendas y tiempo estimado. | Comparación de distancias usando Google Maps para 5 tiendas. Margen de error máximo 500 m. Prueba de los 3 modos de búsqueda. |
| **RF7** | **Asistente Virtual Inteligente** | Chatbot entiende lenguaje natural. Busca productos, responde preguntas sobre precios, hace recomendaciones y mantiene conversación. Usa información de precios y Profeco. | 30 preguntas al chatbot cronometradas. Conversaciones de 4 turnos para verificar contexto. Revisión de referencias a fuentes. |
| **RF8** | **Validación con Datos de Profeco** | Consulta semanal información pública de Profeco (“Quién es Quién en los Precios”) y compara con precios de supermercados. Muestra sello “Validado por Profeco” en coincidencias. | Verificación de descarga semanal de datos Profeco. Conteo de productos en base de datos (mínimo 1,000). Búsqueda de productos validados y confirmación de sello. |
| **RF9** | **Gestión de Usuarios y Preferencias** | Permite crear cuenta (email y contraseña) e iniciar sesión. Guarda supermercados favoritos, ubicación habitual, productos seguidos y alertas personalizadas. | Creación de 20 cuentas de prueba con diferentes preferencias. Verificación de persistencia de datos tras cierre de sesión. Confirmación de edición de preferencias. |
| **RF10** | **Sistema de Notificaciones** | Envía notificaciones web/móvil o email cuando un producto seguido baje ≥10%, existan ofertas especiales o alcance precio objetivo. Configurable en frecuencia y canal. | Simulación con 10 productos seguidos. Verificación de envío en menos de 5 min. Pruebas de configuraciones de frecuencia. |
| **RF11** | **Gestión de Listas de Compra** | Permite crear, editar y eliminar listas de compra. Muestra costo total por supermercado, ahorro potencial y productos no disponibles. | Creación de 5 listas de 5 – 50 productos. Verificación de totales y pruebas con productos no disponibles. |
| **RF12** | **Reporte de Discrepancias** | Botón “Reportar precio incorrecto” en cada producto. Usuarios pueden enviar tienda, precio real, evidencia (foto de ticket o estante) y comentarios. | Envío de 20 reportes de prueba. Verificación de almacenamiento y simulación de 3 reportes iguales con activación de revisión prioritaria. |

---

## ⚙️ REQUISITOS NO FUNCIONALES

| Categoría | Descripción del Requisito | Experiencia Proporcionada al Usuario | Forma de Verificación |
|------------|---------------------------|--------------------------------------|------------------------|
| **Rendimiento** | Mostrar resultados en < 3 s en el 95 % de las búsquedas. | Resultados casi instantáneos sin esperas largas. | Pruebas con 100 búsquedas; 95 deben responder en ≤ 3 s. |
| **Seguridad** | Cifrado SSL/TLS en todas las comunicaciones. | Navegación segura con datos protegidos. | Análisis con SSL Labs con calificación “A” o superior. |
| **Usabilidad** | Un nuevo usuario debe realizar su primera búsqueda en < 2 min sin tutorial. | Facilidad de uso sin instrucciones. | Pruebas con usuarios nuevos; tiempo promedio < 2 min. |
| **Confiabilidad — Disponibilidad** | Disponibilidad mínima del 99 % mensual. | El sistema casi siempre estará activo (máx. 7.2 h inactivo/mes). | Reportes de uptime de herramientas de monitoreo. |
| **Confiabilidad — Compatibilidad** | Soporte para navegadores modernos y móviles Android/iOS. | Accesible desde cualquier dispositivo y navegador. | Pruebas en Chrome, Edge, Firefox, Safari, Opera, Brave, Android y iOS. |
| **Rendimiento — Carga Concurrente** | Soporte mínimo para 5,000 usuarios concurrentes. | Sin lentitud en uso normal con muchos usuarios conectados. | Pruebas de carga simulando 5,000 usuarios. |
| **Desarrollo — Mantenibilidad** | Código documentado y bajo estándares de programación. | Sistema fácil de mantener y mejorar. | Revisiones periódicas de código y documentación. |
| **Usabilidad — Accesibilidad** | Cumplimiento del estándar WCAG 2.1 nivel AA. | Accesible para personas con discapacidad visual o motriz. | Auditorías automáticas + pruebas con lectores de pantalla. |
| **Rendimiento — Escalabilidad** | Escalar hasta 50,000 usuarios concurrentes en temporadas altas. | Funcionamiento fluido en eventos como Buen Fin o Navidad. | Pruebas de estrés simulando 50,000 usuarios. |
| **Protección — Privacidad de Datos** | Cumplimiento con LFPDPPP (México). | Protección de datos personales y derechos ARCO garantizados. | Auditoría legal + revisión de aviso de privacidad y formularios ARCO. |
| **Operacionales — Integración de APIs** | Integración con al menos 5 APIs de supermercados. | Información de precios en tiempo real y confiable. | Pruebas con 1,000 consultas por API (≥ 95 % exitosas). |
| **Legales — Normativa Comercial** | Cumplimiento con regulaciones de comercio electrónico y protección al consumidor. | Términos claros, información fiscal visible y mecanismo de quejas. | Auditoría legal de términos y mecanismos de reclamaciones. |
| **Seguridad — Backup y Recuperación** | Copias de seguridad automáticas cada 24 h y recuperación en < 4 h. | Minimiza la pérdida de información ante fallos del servidor. | Configuración de backups diarios a las 2:00 AM. Simulación de fallo y cronometraje del proceso de restauración. |
| **Documentación** | Debe existir documentación técnica y manual de usuario. | Facilita mantenimiento y uso del sistema. | Verificación de carpeta “documentos” con README, diagramas C4, API docs y manual de usuario con ≥ 20 páginas. |

---

**SmartPrice — Documento de Requisitos (v1.0)**  
📅 Última actualización: 2025  
✍️ Elaborado por: Equipo de desarrollo SmartPrice
