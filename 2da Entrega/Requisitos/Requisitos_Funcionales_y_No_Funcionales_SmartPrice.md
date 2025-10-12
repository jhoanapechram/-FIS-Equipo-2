> *[REQUISITOS FUNCIONALES]{.underline}*

+---+-----------+-------------------------------+---------------------+
| I | Requisito | Descripción                   | Verificación        |
| D |           |                               |                     |
+===+===========+===============================+=====================+
| R | **In      | Conexión automática a 5       | 100 pruebas de      |
| F | tegración | supermercados principales     | consulta por        |
| 1 | de APIs   | (Walmart, Soriana, Chedraui,  | supermercado,       |
|   | de        | Bodega Aurrera, La Comer)     | verificando al      |
|   | Superm    | para obtener precios          | menos 95 respuestas |
|   | ercados** | actualizados, disponibilidad, | correctas.          |
|   |           | ubicaciones cada 30 minutos.  | Comprobación de     |
|   |           |                               | tiempos de          |
|   |           |                               | actualización en    |
|   |           |                               | registros del       |
|   |           |                               | sistema.            |
+---+-----------+-------------------------------+---------------------+
| R | **        | Sistema guarda cada cambio de | Base de datos con   |
| F | Historial | precio durante 12 meses.      | 100,000 registros   |
| 2 | de        | Muestra gráficas de evolución | de prueba y 20      |
|   | Precios** | y detecta patrones de subidas | consultas de        |
|   |           | y bajadas.                    | tendencias,         |
|   |           |                               | verificando         |
|   |           |                               | respuesta en menos  |
|   |           |                               | de 2 segundos.      |
+---+-----------+-------------------------------+---------------------+
| R | **Co      | Tabla comparativa con precio  | 20 búsquedas de     |
| F | mparación | por supermercado, precio por  | diferentes          |
| 3 | de        | kg/lt, porcentaje de          | productos midiendo  |
|   | Precios   | diferencia, disponibilidad,   | tiempo de           |
|   | en Tiempo | distancia a tienda.           | respuesta.          |
|   | Real**    |                               | Verificación visual |
|   |           |                               | de indicadores      |
|   |           |                               | \"mejor precio\" y  |
|   |           |                               | \"más cercano\".    |
+---+-----------+-------------------------------+---------------------+
| R | **P       | IA analiza histórico de       | Modelo entrenado    |
| F | redicción | precios y predice cambios en  | con 6 meses de      |
| 4 | de        | próximos 7, 14 y 30 días.     | datos históricos,   |
|   | Precios   | Muestra gráficas con          | evaluado con datos  |
|   | con IA**  | predicción, nivel de          | reales. Deberá      |
|   |           | confianza.                    | tener un error      |
|   |           |                               | promedio menor al   |
|   |           |                               | 15%.                |
+---+-----------+-------------------------------+---------------------+
| R | **V       | Analiza historial de ofertas  | 10 productos con    |
| F | alidación | y asigna nivel de confianza:  | ofertas verificados |
| 5 | de        |                               | manualmente.        |
|   | Conf      | ALTA (\>7 días), MEDIA (3-7   | Validación de       |
|   | iabilidad | días), BAJA (\<3 días).       | clasificación y     |
|   | de        | Muestra duración esperada,    | porcentajes de      |
|   | Ofertas** | descuento real.               | descuento.          |
+---+-----------+-------------------------------+---------------------+
| R | **Geoloc  | Solicita ubicación (con       | -   Comparación de  |
| F | alización | permiso) y calcula distancia  |     distancias      |
| 6 | y         | a cada tienda. Tres modos:    |     usando Google   |
|   | Reco      |                               |     Maps para 5     |
|   | mendación | \"Mejor Precio\"              |     tiendas. Margen |
|   | Inte      |                               |     de error máximo |
|   | ligente** | \"Más Cercano\", \"Balance\"  |     500 metros.     |
|   |           |                               |                     |
|   |           | . Mapa con tiendas, tiempo    | -   Prueba de los 3 |
|   |           | estimado.                     |     modos de        |
|   |           |                               |     búsqueda.       |
+---+-----------+-------------------------------+---------------------+
| R | **        | Chatbot entiende lenguaje     | 30 preguntas al     |
| F | Asistente | natural. Busca productos,     | chatbot             |
| 7 | Virtual   | responde preguntas sobre      | cronometradas.      |
|   | Inte      | precios, hace                 | Conversaciones de 4 |
|   | ligente** | recomendaciones, mantiene     | turnos para         |
|   |           | conversación. Usa información | verificar contexto. |
|   |           | de precios, Profeco.          | Revisión de         |
|   |           |                               | referencias a       |
|   |           |                               | fuentes.            |
+---+-----------+-------------------------------+---------------------+
| R | **V       | Consulta semanal información  | Verificación de     |
| F | alidación | pública de Profeco (\"Quién   | descarga semanal de |
| 8 | con Datos | es Quién en los Precios\") y  | datos Profeco.      |
|   | de        | compara con precios de        | Conteo de productos |
|   | Profeco** | supermercados. Muestra sello  | en base de datos    |
|   |           | \"Validado por Profeco\" en   | (mínimo 1,000).     |
|   |           | coincidencias.                | Búsqueda de         |
|   |           |                               | productos validados |
|   |           |                               | y confirmación de   |
|   |           |                               | sello.              |
+---+-----------+-------------------------------+---------------------+
| R | **Gestión | El sistema permitirá crear    | Crearemos 20        |
| F | de        | cuenta (registro con email y  | cuentas de prueba   |
| 9 | Usuarios  | contraseña) e iniciar sesión. | con diferentes      |
|   | y         | Los usuarios podrán guardar   | preferencias.       |
|   | Prefe     | supermercados favoritos,      | Verificación de     |
|   | rencias** | ubicación habitual, productos | persistencia de     |
|   |           | seguidos, alertas             | datos tras cierre   |
|   |           | personalizadas de precios     | de sesión.          |
|   |           |                               | Confirmación de     |
|   |           |                               | edición de          |
|   |           |                               | preferencias        |
+---+-----------+-------------------------------+---------------------+
| R | **Sistema | El sistema enviará            | Configuraremos 10   |
| F | de        | notificaciones vía web/móvil  | productos seguidos  |
| 1 | Notific   | y email cuando un producto    | con precios         |
| 0 | aciones** | seguido baje ≥10%, existan    | objetivo.           |
|   |           | ofertas especiales en tiendas | Simularemos bajadas |
|   |           | favoritas, o un producto      | y verificaremos     |
|   |           | alcance precio objetivo. El   | envío en menos de 5 |
|   |           | usuario configurará           | minutos. Pruebas de |
|   |           | frecuencia y canal.           | configuraciones de  |
|   |           |                               | frecuencia          |
+---+-----------+-------------------------------+---------------------+
| R | **Gestión | El sistema permitirá crear,   | Crearemos 5 listas  |
| F | de Listas | editar, eliminar listas de    | de 5 a 50           |
| 1 | de        | compra. Los usuarios podrán   | productos.          |
| 1 | Compra**  | agregar productos con         | Verificación de     |
|   |           | cantidades específicas.       | totales contra      |
|   |           | Mostrará costo total por      | cálculos manuales.  |
|   |           | supermercado, ahorro          | Pruebas con         |
|   |           | potencial vs tienda más cara, | productos no        |
|   |           | productos no disponibles,     | disponibles         |
|   |           | recomendación de mejor        |                     |
|   |           | opción.                       |                     |
+---+-----------+-------------------------------+---------------------+
| R | **Reporte | El sistema incluirá botón     | Enviaremos 20       |
| F | de        | \"Reportar precio             | reportes de prueba. |
| 1 | Discre    | incorrecto\" en cada          | Verificación de     |
| 2 | pancias** | producto. Los usuarios        | almacenamiento en   |
|   |           | indicarán tienda, precio      | base de datos.      |
|   |           | real, evidencia opcional      | Simulación de 3     |
|   |           | (foto ticket o estante),      | reportes iguales y  |
|   |           | comentarios. Reportes         | activación de       |
|   |           | almacenados para análisis y   | revisión. Carga de  |
|   |           | validación. Si múltiples      | imágenes de prueba. |
|   |           | reportes coinciden, se        |                     |
|   |           | marcará el producto para      |                     |
|   |           | revisión prioritaria.         |                     |
+---+-----------+-------------------------------+---------------------+

*[REQUISITOS NO FUNCIONALES]{.underline}*

+-------------+--------------+-------------------+--------------------+
| > Categoría | >            | > EXPERENCIA      | > Forma de         |
|             |  Descripción | > PROPORCIONADA   | > Verificación     |
|             | > del        | > AL USUARIO      |                    |
|             | > Requisito  |                   |                    |
+=============+==============+===================+====================+
| >           | > Mostrar    | > Resultados casi | > Pruebas con 100  |
| Rendimiento | > resultados | > instantáneos    | > búsquedas.       |
|             | > en \< 3    | > sin esperas     | >                  |
|             | > segundos   | > largas          | > 95 deben         |
|             | > en el 95%  |                   | > responder en ≤   |
|             | > de las     |                   | > 3s               |
|             | > búsquedas  |                   |                    |
+-------------+--------------+-------------------+--------------------+
| > Seguridad | > Cifrado    | > Navegación      | > Análisis con SSL |
|             | > SSL/TLS en | > segura con      | > Labs que deberá  |
|             | > todas las  | > datos           | > contar con       |
|             | > co         | > protegidos      | > calificación A o |
|             | municaciones |                   | > superior         |
+-------------+--------------+-------------------+--------------------+
| >           | > Un nuevo   | > Facilidad de    | > Pruebas con      |
|  Usabilidad | > usuario    | > uso sin         | > usuarios nuevos. |
|             | > debe       | > instrucciones   | > El tiempo        |
|             | > realizar   |                   | > promedio \< 2    |
|             | > su primera |                   | > min              |
|             | > búsqueda   |                   |                    |
|             | > en \< 2    |                   |                    |
|             | > minutos    |                   |                    |
|             | > sin        |                   |                    |
|             | > tutorial   |                   |                    |
+-------------+--------------+-------------------+--------------------+
| > Conf      | > Di         | > El sistema casi | > Reportes de      |
| iabilidad - | sponibilidad | > siempre estará  | > uptime de        |
| > Dis       | > mínima del | > activo (máx.    | > herramientas de  |
| ponibilidad | > 99%        | > 7.2 h           | > monitoreo        |
|             | > mensual    | > inactivo/mes)   |                    |
+-------------+--------------+-------------------+--------------------+
| > Conf      | > Soporte    | > Accesible desde | > Pruebas          |
| iabilidad - | > para       | > cualquier       | > funcionales en   |
| > Com       | >            | > dispositivo y   | > Chrome, Edge,    |
| patibilidad |  navegadores | > navegador       | > Firefox, Safari, |
|             | > modernos y |                   | > Opera, Brave,    |
|             | > móviles    |                   | > Android y iOS    |
|             | >            |                   |                    |
|             |  Android/iOS |                   |                    |
+-------------+--------------+-------------------+--------------------+
| > Re        | > Soporte    | > No habrá        | > Pruebas de carga |
| ndimiento - | > mínimo     | > lentitud en uso | > simulando 5,000  |
| > Carga     | > para 5,000 | > normal con      | > usuarios         |
| >           | > usuarios   | > muchos usuarios |                    |
| Concurrente | >            | > conectados      |                    |
|             | concurrentes |                   |                    |
+-------------+--------------+-------------------+--------------------+
| > D         | > Código     | > Sistema fácil   | > Revisiones       |
| esarrollo - | >            | > de mantener y   | > periódicas de    |
| > Man       |  documentado | > mejorar         | > código y         |
| tenibilidad | > y bajo     |                   | > documentación    |
|             | > estándares |                   |                    |
|             | > de         |                   |                    |
|             | >            |                   |                    |
|             | programación |                   |                    |
+-------------+--------------+-------------------+--------------------+
| > U         | >            | > Accesible para  | > Auditorías con   |
| sabilidad - | Cumplimiento | > personas con    | > herramientas     |
| > Ac        | > de         | > discapacidad    | > automáticas +    |
| cesibilidad | > estándar   | > visual o motriz | > pruebas con      |
|             | > WCAG 2.1   |                   | > lectores de      |
|             | > nivel AA   |                   | > pantalla         |
+-------------+--------------+-------------------+--------------------+
| > Re        | > Capacidad  | > Funcionamiento  | > Pruebas de       |
| ndimiento - | > de escalar | > fluido en       | > estrés simulando |
| > Es        | > hasta      | > eventos como    | > 50,000 usuarios  |
| calabilidad | > 50,000     | > Buen Fin o      |                    |
|             | > usuarios   | > Navidad         |                    |
|             | >            |                   |                    |
|             | concurrentes |                   |                    |
|             | > en         |                   |                    |
|             | > temporadas |                   |                    |
|             | > altas      |                   |                    |
+-------------+--------------+-------------------+--------------------+
| > P         | >            | > Protección de   | > Auditoría        |
| rotección - | Cumplimiento | > datos           | > legal + revisión |
| >           | > con        | > personales y    | > de aviso de      |
|  Privacidad | > LFPDPPP    | > derechos ARCO   | > privacidad y     |
| > de Datos  | > (México)   | > garantizados    | > formularios ARCO |
+-------------+--------------+-------------------+--------------------+
| > Oper      | >            | > Información de  | > Pruebas con      |
| acionales - |  Integración | > precios en      | > 1,000 consultas  |
| >           | > con al     | > tiempo real y   | > por API → 95%    |
| Integración | > menos 5    | > confiable       | > exitosas         |
| > de APIs   | > APIs de    |                   |                    |
|             | > s          |                   |                    |
|             | upermercados |                   |                    |
+-------------+--------------+-------------------+--------------------+
| > Legales - | >            | > Términos        | > Auditoría legal  |
| > Normativa | Cumplimiento | > claros,         | > de términos,     |
| > Comercial | > con        | > información     | > avisos y         |
|             | >            | > fiscal visible  | > mecanismos de    |
|             | regulaciones | > y mecanismo de  | > reclamaciones    |
|             | > de         | > quejas          |                    |
|             | > comercio   |                   |                    |
|             | >            |                   |                    |
|             |  electrónico |                   |                    |
|             | > y          |                   |                    |
|             | > protección |                   |                    |
|             | > al         |                   |                    |
|             | > consumidor |                   |                    |
+-------------+--------------+-------------------+--------------------+
| > SEGUR     | > El sistema | > Cada día se     | > Configuraremos   |
| IDAD-Backup | > debe hacer | > hará una copia  | > backups          |
| > y         | > copias de  | > completa de     | > automáticos      |
| > r         | > seguridad  | > todos los datos | > diarios a las    |
| ecuperación | >            | > (precios,       | > 2:00 AM.         |
|             |  automáticas | > usuarios,       | > Verificaremos la |
|             | > cada 24    | > historial)      | > ejecución        |
|             | > horas y    | >                 | > revisando logs   |
|             | > poder      |  automáticamente. | > del último mes.  |
|             | >            | > Si ocurre un    | > Simularemos un   |
|             |  recuperarse | > problema grave  | > fallo completo   |
|             | > en menos   | > con el          | > del sistema      |
|             | > de 4 horas | > servidor,       | > (apagar servidor |
|             | > en caso de | > podemos         | > principal) y     |
|             | > fallo      | > restaurar todo  | > cronometraremos  |
|             |              | > el sistema y    | > el proceso       |
|             |              | > sus datos en    | > completo de      |
|             |              | > máximo 4 horas, | > restauración     |
|             |              | > minimizando la  | > desde el backup  |
|             |              | > pérdida de      | > hasta que el     |
|             |              | > información.    | > sistema vuelva a |
|             |              |                   | > estar 100%       |
|             |              |                   | > operativo. El    |
|             |              |                   | > proceso completo |
|             |              |                   | > debe completarse |
|             |              |                   | > en menos de 4    |
|             |              |                   | > horas.           |
+-------------+--------------+-------------------+--------------------+
| > do        | > Debe       | > Habrá dos tipos | > Revisaremos que  |
| cumentación | > existir    | > de              | > exista carpeta   |
|             | > d          | > documentación   | > "documentos" en  |
|             | ocumentación | > completa: 1)    | > el repositorio   |
|             | > técnica    | > Documentación   | > con              |
|             | > para       | > técnica con     | > documentación    |
|             | > des        | > instrucciones   | > técnica completa |
|             | arrolladores | > de instalación, | > (README con      |
|             | > y manual   | > arquitectura    | > instrucciones de |
|             | > de usuario | > del sistema,    | > instalación,     |
|             | > para       | > guías de API y  | > diagramas de     |
|             | > clientes   | > guías para      | > arquitectura C4, |
|             | > finales.   | > desarrolladores | > documentación de |
|             |              | > que quieran     | > API endpoints,   |
|             |              | > mantener o      | > guías de         |
|             |              | > mejorar el      | > contribución).   |
|             |              | > código. 2)      | > Verificaremos    |
|             |              | > Manual de       | > que exista       |
|             |              | > usuario         | > manual de        |
|             |              | > amigable con    | > usuario en       |
|             |              | > capturas de     | > formato PDF      |
|             |              | > pantalla,       | > descargable o    |
|             |              | > videos          | > sección de       |
|             |              | > tutoriales y    | > \"Ayuda\" en la  |
|             |              | > guías paso a    | > aplicación web   |
|             |              | > paso explicando | > con mínimo 20    |
|             |              | > cómo usar cada  | > páginas          |
|             |              | > función de      | > cubriendo todas  |
|             |              | > Smart Price.    | > las              |
|             |              |                   | > funcionalidades  |
|             |              |                   | > principales con  |
|             |              |                   | > ejemplos         |
|             |              |                   | > visuales,        |
|             |              |                   | > capturas de      |
|             |              |                   | > pantalla y casos |
|             |              |                   | > de uso.          |
+-------------+--------------+-------------------+--------------------+
