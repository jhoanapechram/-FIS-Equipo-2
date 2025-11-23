# 📊 Análisis de Resultados de las Pruebas Informales de Usabilidad de SmartPrice

## 📋 Índice
1. [Análisis estadístico de los resultados – Métricas](#1-análisis-estadístico-de-los-resultados--métricas)  
2. [Resumen General por Tarea](#2-resumen-general-por-tarea)  
3. [Análisis por Tarea](#3-análisis-por-tarea)  
   3.1 [Tarea 1: Comparación de Precios](#31-tarea-1-comparación-de-precios)  
   3.2 [Tarea 2: Evolución de Precios](#32-tarea-2-evolución-de-precios)  
   3.3 [Tarea 3: Mejor Opción por Ubicación](#33-tarea-3-mejor-opción-por-ubicación)  
   3.4 [Tarea 4: Asistente Virtual](#34-tarea-4-asistente-virtual)  
   3.5 [Tarea 5: Lista de Compra](#35-tarea-5-lista-de-compra)  
4. [Métricas de Satisfacción Global](#4-métricas-de-satisfacción-global)  
5. [Análisis Detallado de Cumplimiento por Usuario](#5-análisis-detallado-de-cumplimiento-por-usuario)  
6. [Mejoras propuestas](#6-mejoras-propuestas)

---

## 1. Análisis estadístico de los resultados – Métricas

| Tarea                         | Tasa de completación | Tiempo promedio (rango)                  | Clics promedio | Tasa de error promedio | Tasa de error por usuario | Frustración promedio |
|------------------------------|----------------------|------------------------------------------|----------------|------------------------|---------------------------|----------------------|
| CU-001 Comparación de Precios | 100% (21/21)         | 52.4s (14.6s – 3m 16.2s)                 | 8.3            | 9.5% (2/21)            | 4.8% (1/21)               | 1.0/5                |
| CU-002 Evolución de Precios   | 100% (21/21)         | 1m 17.8s (14.2s – 5m 0s)                 | 8.6            | 9.5% (2/21)            | 9.5% (2/21)               | 1.2/5                |
| CU-005 Mejor opción por ubicación | 100% (21/21)     | 1m 13.4s (7.1s – 2m 45.5s)               | 7.4            | 33.3% (7/21)           | 19% (4/21)                | 1.4/5                |
| CU-006 Asistente Virtual      | 100% (21/21)         | 1m 6.4s (11.1s – 2m 21.6s)               | 7.0            | 19% (4/21)             | 9.5% (2/21)               | 1.1/5                |
| CU-011 Lista de Compra        | 100% (21/21)         | 2m 15.2s (23.2s – 4m 6.3s)               | 23.4           | 57% (12/21)            | 66% (14/21)               | 2.0/5                |

---

## 2. Resumen General por Tarea

Este resumen muestra el nivel de alcance de los indicadores de cada tarea.

| Tarea | Porcentaje de Cumplimiento | Estado |
| :--- | :---: | :---: |
| **Tarea 1: Comparación de Precios** | **85.7%** | ✅ Cumplida |
| **Tarea 3: Mejor Opción por Ubicación** | **81.0%** | ✅ Cumplida |
| **Tarea 4: Asistente Virtual** | **71.4%** | 🟡 Parcial |
| **Tarea 2: Evolución de Precios** | **57.1%** | 🟡 Parcial |
| **Tarea 5: Lista de Compra** | **23.8%** | ❌ No Cumplida |

---

## 3. Análisis por Tarea

### 3.1 Tarea 1: Comparación de Precios

**✅ Cumplimiento: 85.7%** (18 de 21 usuarios)

| Indicador | Meta | Cumplimiento |
| :--- | :---: | :---: |
| Selección correcta | 100% | **100%** |
| Tiempo $\leq$ 85s | 80% | **85.7%** |
| Clics $\leq$ 12 | 80% | **85.7%** |
| Errores $\leq$ 2 | 80% | **100%** |
| Frustración $\leq$ 2 | 80% | **100%** |

#### Hallazgos Clave

  * Funcionalidad **mejor recibida** por los usuarios.
  * Tiempos dentro de rangos **aceptables**.
  * Alta satisfacción del usuario.

---

### 3.2 Tarea 2: Evolución de Precios

**🟡 Cumplimiento: 57.1%** (12 de 21 usuarios)

| Indicador | Meta | Cumplimiento |
| :--- | :---: | :---: |
| Acceso historial | 100% | **100%** |
| Identifica precio bajo | 100% | **100%** |
| Errores $\leq$ 2 | 80% | **95.2%** |
| Tiempo $\leq$ 85s | 80% | **57.1%** | ❌
| Clics $\leq$ 12 | 80% | **66.7%** | ❌
| Decisión coherente | 80% | **85.7%** |
| Frustración $\leq$ 2 | 80% | **90.5%** |

#### Hallazgos Clave

  * Gráficas comprensibles pero de **tamaño insuficiente**.
  * **Tiempos de ejecución problemáticos** (principal causa del bajo cumplimiento).
  * Navegación requiere **optimización**.

---

### 3.3 Tarea 3: Mejor Opción por Ubicación

**✅ Cumplimiento: 81.0%** (17 de 21 usuarios)

| Indicador | Meta | Cumplimiento |
| :--- | :---: | :---: |
| Agrega producto | 100% | **100%** |
| Explica criterio | 80% | **85.7%** |
| Errores $\leq$ 2 | 80% | **90.5%** |
| Tiempo $\leq$ 100s | 80% | **81.0%** |
| Clics $\leq$ 15 | 80% | **81.0%** |
| Confianza en recomendación | 80% | **85.7%** |
| Frustración $\leq$ 2 | 80% | **90.5%** |

#### Hallazgos Clave

  * Algoritmo de recomendación **bien comprendido**.
  * Balance precio/distancia efectivo.
  * Tiempos de ejecución **optimizados**.

---

### 3.4 Tarea 4: Asistente Virtual

**🟡 Cumplimiento: 71.4%** (15 de 21 usuarios)

| Indicador | Meta | Cumplimiento |
| :--- | :---: | :---: |
| Localiza chatbot | 100% | **100%** |
| Errores $\leq$ 2 | 80% | **90.5%** |
| Tiempo $\leq$ 80s | 80% | **71.4%** | ❌
| Clics $\leq$ 10 | 80% | **76.2%** | ❌
| Respuesta útil | 80% | **90.5%** |
| Interacción natural | 80% | **85.7%** |
| Frustración $\leq$ 1 | 80% | **95.2%** |

#### Hallazgos Clave

  * Interacción generalmente **fluida**.
  * Necesita **optimización de tiempos** para alcanzar la meta.
  * Respuestas consideradas **útiles**.

---

### 3.5 Tarea 5: Lista de Compra

**❌ Cumplimiento: 23.8%** (5 de 21 usuarios)

| Indicador | Meta | Cumplimiento |
| :--- | :---: | :---: |
| Crea lista $\geq$ 3 productos | 100% | **100%** |
| Revisa comparación | 100% | **100%** |
| Errores $\leq$ 2 | 80% | **71.4%** | ❌
| Tiempo $\leq$ 120s | 80% | **33.3%** | ❌
| Clics $\leq$ 20 | 80% | **42.9%** | ❌
| Identifica supermercado | 100% | **100%** |
| Frustración $\leq$ 3 | 80% | **76.2%** | ❌

#### Hallazgos Críticos

  * Flujo **excesivamente complejo**.
  * **Tiempos y número de clics muy por encima del objetivo** (principal causa de fracaso).
  * Alta **frustración** en usuarios.

---

## 4. Métricas de Satisfacción Global

| Métrica | Resultado |
| :--- | :---: |
| Tasa Completitud General | **100%** |
| Satisfacción Promedio | **81%** |
| Probabilidad de Uso | **3.9/5** |
| Tasa Recomendación | **90%** |

---

## 5. Análisis Detallado de Cumplimiento por Usuario

### 5.1 Tarea 1: Comparación de Precios

> **Resumen:** 18 de 21 cumplen todos los indicadores (**85.7%**)

| Usuario | Edad | Tiempo $\leq$ 85s | Clics $\leq$ 12 | Errores $\leq$ 2 | Frustración $\leq$ 2 | **Cumple Todos** |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| U01 | 45 | 43.2s ✅ | 5 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U02 | 18 | 40.2s ✅ | 4 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U03 | 18 | 53.0s ✅ | 3 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U04 | 18 | 34.9s ✅ | 3 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U05 | 18 | 14.6s ✅ | 3 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U06 | 38 | 39.5s ✅ | 3 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U07 | 18 | 45.3s ✅ | 7 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U08 | 18 | 35.1s ✅ | 10 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U09 | 18 | 37.7s ✅ | 3 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U10 | 44 | 82.9s ✅ | 6 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U11 | 19 | 69.3s ✅ | 12 ✅ | 2 ✅ | 1 ✅ | SÍ |
| U12 | 44 | 41.7s ✅ | 5 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U13 | 19 | 86.5s ❌ | 36 ❌ | 0 ✅ | 1 ✅ | NO |
| U14 | 44 | 32.0s ✅ | 3 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U15 | 24 | 23.0s ✅ | 3 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U16 | 18 | 77.0s ✅ | 22 ❌ | 0 ✅ | 1 ✅ | NO |
| U17 | 29 | 37.9s ✅ | 3 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U18 | 19 | 21.3s ✅ | 4 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U19 | 18 | 16.6s ✅ | 4 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U20 | 41 | 196.2s ❌ | 11 ✅ | 0 ✅ | 1 ✅ | NO |
| U21 | 49 | 102.4s ❌ | 3 ✅ | 0 ✅ | 1 ✅ | NO |

### 5.2 Tarea 2: Evolución de Precios

> **Resumen:** 12 de 21 cumplen todos los indicadores (**57.1%**)

| Usuario | Edad | Tiempo $\leq$ 85s | Clics $\leq$ 12 | Errores $\leq$ 2 | Frustración $\leq$ 2 | **Cumple Todos** |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| U01 | 45 | 35.1s ✅ | 4 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U02 | 18 | 42.3s ✅ | 4 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U03 | 18 | 27.6s ✅ | 6 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U04 | 18 | 43.1s ✅ | 4 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U05 | 18 | 45.9s ✅ | 17 ❌ | 0 ✅ | 2 ✅ | NO |
| U06 | 38 | 54.2s ✅ | 5 ✅ | 0 ✅ | 3 ❌ | NO |
| U07 | 18 | 300.0s ❌ | 6 ✅ | 0 ✅ | 1 ✅ | NO |
| U08 | 18 | 150.0s ❌ | 10 ✅ | 0 ✅ | 2 ✅ | NO |
| U09 | 18 | 80.0s ✅ | 9 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U10 | 44 | 56.3s ✅ | 5 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U11 | 19 | 79.0s ✅ | 8 ✅ | 1 ✅ | 1 ✅ | SÍ |
| U12 | 44 | 34.0s ✅ | 4 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U13 | 19 | 88.0s ❌ | 23 ❌ | 0 ✅ | 1 ✅ | NO |
| U14 | 44 | 66.0s ✅ | 4 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U15 | 24 | 27.0s ✅ | 6 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U16 | 18 | 149.1s ❌ | 29 ❌ | 0 ✅ | 1 ✅ | NO |
| U17 | 29 | 111.7s ❌ | 11 ✅ | 1 ✅ | 1 ✅ | NO |
| U18 | 19 | 133.2s ❌ | 12 ✅ | 0 ✅ | 1 ✅ | NO |
| U19 | 18 | 14.2s ✅ | 5 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U20 | 41 | 112.5s ❌ | 7 ✅ | 0 ✅ | 1 ✅ | NO |
| U21 | 49 | 92.1s ❌ | 4 ✅ | 0 ✅ | 1 ✅ | NO |

### 5.3 Tarea 3: Mejor Opción por Ubicación

> **Resumen:** 17 de 21 cumplen todos los indicadores (**81.0%**)

| Usuario | Edad | Tiempo $\leq$ 100s | Clics $\leq$ 15 | Errores $\leq$ 2 | Frustración $\leq$ 2 | **Cumple Todos** |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| U01 | 45 | 98.2s ✅ | 3 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U02 | 18 | 31.3s ✅ | 4 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U03 | 18 | 24.5s ✅ | 6 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U04 | 18 | 77.5s ✅ | 5 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U05 | 18 | 29.8s ✅ | 8 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U06 | 38 | 66.9s ✅ | 4 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U07 | 18 | 13.2s ✅ | 7 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U08 | 18 | 24.1s ✅ | 7 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U09 | 18 | 96.3s ✅ | 8 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U10 | 44 | 50.8s ✅ | 5 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U11 | 19 | 127.4s ❌ | 11 ✅ | 2 ✅ | 2 ✅ | NO |
| U12 | 44 | 165.5s ❌ | 8 ✅ | 1 ✅ | 2 ✅ | NO |
| U13 | 19 | 100.0s ✅ | 36 ❌ | 0 ✅ | 3 ❌ | NO |
| U14 | 44 | 123.0s ❌ | 7 ✅ | 0 ✅ | 2 ✅ | NO |
| U15 | 24 | 50.7s ✅ | 6 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U16 | 18 | 12.0s ✅ | 4 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U17 | 29 | 37.3s ✅ | 5 ✅ | 2 ✅ | 1 ✅ | SÍ |
| U18 | 19 | 43.8s ✅ | 13 ✅ | 2 ✅ | 1 ✅ | SÍ |
| U19 | 18 | 7.1s ✅ | 3 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U20 | 41 | 91.9s ✅ | 7 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U21 | 49 | 96.4s ✅ | 7 ✅ | 0 ✅ | 1 ✅ | SÍ |

### 5.4 Tarea 4: Asistente Virtual

> **Resumen:** 15 de 21 cumplen todos los indicadores (**71.4%**)

| Usuario | Edad | Tiempo $\leq$ 80s | Clics $\leq$ 10 | Errores $\leq$ 2 | Frustración $\leq$ 1 | **Cumple Todos** |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| U01 | 45 | 28.6s ✅ | 4 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U02 | 18 | 32.4s ✅ | 4 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U03 | 18 | 23.3s ✅ | 4 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U04 | 18 | 40.3s ✅ | 4 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U05 | 18 | 96.6s ❌ | 7 ✅ | 0 ✅ | 1 ✅ | NO |
| U06 | 38 | 67.3s ✅ | 7 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U07 | 18 | 25.2s ✅ | 7 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U08 | 18 | 28.3s ✅ | 4 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U09 | 18 | 80.3s ❌ | 6 ✅ | 3 ❌ | 3 ❌ | NO |
| U10 | 44 | 70.0s ✅ | 9 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U11 | 19 | 57.2s ✅ | 7 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U12 | 44 | 141.6s ❌ | 13 ❌ | 1 ✅ | 1 ✅ | NO |
| U13 | 19 | 112.0s ❌ | 25 ❌ | 0 ✅ | 1 ✅ | NO |
| U14 | 44 | 123.0s ❌ | 7 ✅ | 0 ✅ | 1 ✅ | NO |
| U15 | 24 | 77.6s ✅ | 5 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U16 | 18 | 85.5s ❌ | 10 ✅ | 0 ✅ | 1 ✅ | NO |
| U17 | 29 | 70.5s ✅ | 9 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U18 | 19 | 22.3s ✅ | 4 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U19 | 18 | 11.1s ✅ | 4 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U20 | 41 | 90.5s ❌ | 7 ✅ | 0 ✅ | 1 ✅ | NO |
| U21 | 49 | 53.0s ✅ | 4 ✅ | 0 ✅ | 1 ✅ | SÍ |

### 5.5 Tarea 5: Lista de Compra

> **Resumen:** 5 de 21 cumplen todos los indicadores (**23.8%**)

| Usuario | Edad | Tiempo $\leq$ 120s | Clics $\leq$ 20 | Errores $\leq$ 2 | Frustración $\leq$ 3 | **Cumple Todos** |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| U01 | 45 | 201.3s ❌ | 30 ❌ | 1 ✅ | 1 ✅ | NO |
| U02 | 18 | 155.2s ❌ | 26 ❌ | 1 ✅ | 1 ✅ | NO |
| U03 | 18 | 23.2s ✅ | 6 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U04 | 18 | 151.3s ❌ | 26 ❌ | 2 ✅ | 1 ✅ | NO |
| U05 | 18 | 167.4s ❌ | 27 ❌ | 2 ✅ | 3 ✅ | NO |
| U06 | 38 | 152.3s ❌ | 14 ✅ | 1 ✅ | 4 ❌ | NO |
| U07 | 18 | 104.9s ✅ | 12 ✅ | 3 ❌ | 3 ✅ | NO |
| U08 | 18 | 28.8s ✅ | 7 ✅ | 2 ✅ | 4 ❌ | NO |
| U09 | 18 | 174.2s ❌ | 30 ❌ | 1 ✅ | 4 ❌ | NO |
| U10 | 44 | 68.0s ✅ | 6 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U11 | 19 | 140.2s ❌ | 38 ❌ | 4 ❌ | 3 ✅ | NO |
| U12 | 44 | 246.3s ❌ | 18 ✅ | 1 ✅ | 2 ✅ | NO |
| U13 | 19 | 79.0s ✅ | 24 ❌ | 0 ✅ | 2 ✅ | NO |
| U14 | 44 | 67.0s ✅ | 10 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U15 | 24 | 200.0s ❌ | 24 ❌ | 3 ❌ | 3 ✅ | NO |
| U16 | 18 | 200.6s ❌ | 61 ❌ | 2 ✅ | 1 ✅ | NO |
| U17 | 29 | 150.1s ❌ | 46 ❌ | 3 ❌ | 1 ✅ | NO |
| U18 | 19 | 111.1s ✅ | 23 ❌ | 2 ✅ | 1 ✅ | NO |
| U19 | 18 | 77.4s ✅ | 17 ✅ | 0 ✅ | 1 ✅ | SÍ |
| U20 | 41 | 132.0s ❌ | 21 ❌ | 0 ✅ | 1 ✅ | NO |
| U21 | 49 | 126.5s ❌ | 14 ✅ | 0 ✅ | 1 ✅ | NO |

---

## 6. Mejoras propuestas

| Tarea | Problemas clave | Mejoras identificadas a los problemas |
|-------|------------------|----------------------------------------|
| CU-001 | 1. Botones poco intuitivos (un usuario realizó 36 clics para encontrar la acción correcta).<br>2. Falta de indicadores visuales claros en algunos elementos. | 1. Se identifica la oportunidad de mejorar la intuición de los botones, por lo que se consideramos necesario rediseñar su forma, iconografía y microinteracciones para que la función de cada se comprenda de manera inmediata desde el primer contacto.<br>2. También se identifica que ciertos elementos no se perciben fácilmente como clicables, esto nos llevaría a proponer una optimización en los estados visuales, así como la incorporación de mejor contraste y etiquetas descriptivas que ayuden a interpretar más fácil la interfaz. |
| CU-002 | 1. Imagen de historial muy pequeño y poco visible (mencionado por 5 usuarios).<br>2. Posicionamiento no intuitivo en la jerarquía visual.<br>3. Falta de iconos descriptivos (ícono de gráfica, texto explicativo). | 1. La situación de la imagen del historial nos lleva a la oportunidad de rediseñar el módulo para aumentar su tamaño, reposicionarlo dentro de un lugar visual más claro y alinearlo con los elementos principales de su sección dentro de la app.<br>2. También se cuestiona que el historial no destaca lo suficiente dentro de la estructura de la pantalla, por lo que proponemos ajustar su ubicación para facilitar su descubrimiento, esto permitiría identificar más rápido su utilidad y acceso.<br>3. Por otra parte, se detecta el escaso entendimiento del historial por los usuarios, lo que consideramos pertinente integrar iconos descriptivos y breves textos auxiliares que aclaren su propósito y refuercen la idea de que se trata de un elemento interactivo y accesible. |
| CU-005 | 1. Concepto de “balance” poco claro (3 usuarios no entendieron el criterio).<br>2. Falta de transparencia en cómo se calcula precio + distancia. Nombre confuso (“balance” no comunica la lógica).<br>3. Ausencia de ayudas visuales (tooltips o explicaciones). | 1. El concepto de "balance" no comunica adecuadamente su función, lo que genera confusión, por lo que propone cambiar el nombre por uno más descriptivo como “Equilibrio entre el precio y la distancia”.<br>2. Se identifica una falta de transparencia en el proceso, por lo que se propone mostrar el desglose del cálculo (precio + distancia) para dar transparencia al proceso.<br>3. Finalmente, se plantea incorporar ayudas visuales como tipa y mensajes explicativos que orienten al usuario en la interpretación de los datos. |
| CU-006 | 1. No se puede añadir productos directamente desde la respuesta del chatbot.<br>2. Pocas preguntas rápidas contextuales.<br>3. Historial de conversación no disponible. | 1. Se observa la limitación del chatbot para añadir productos directamente, por lo que se propone habilitar esta funcionalidad para agilizar la experiencia.<br>2. Se propone incluir preguntas rápidas contextuales que permitan al usuario interactuar de manera más eficiente con el chatbot.<br>3. También se plantea habilitar un historial de conversación accesible para mejorar continuidad en la interacción y acceder a búsquedas previas. |
| CU-011 | 1. Flujo confuso (¿crear lista primero o añadir productos?).<br>2. Botón de creación de lista difícil de encontrar (mencionado por 8 usuarios).<br>3. Botones poco llamativos y mal ubicados.<br>4. Integración deficiente con el resto del sistema.<br>5. Elementos interactivos no se perciben como clicables.<br>6. Falta de confirmación visual (no hay feedback claro). | 1. El flujo actual genera confusión sobre el orden de las acciones, por lo que se propone simplificarlo mediante una guía clara y pasos secuenciales.<br>2. Se recomienda reubicar en una sección independiente y resaltar el botón de creación de lista, aumentando su visibilidad con diseño llamativo.<br>3. Además, se plantea mejorar la estética general (colores, tamaño, contraste) y añadir confirmaciones visuales para reforzar la percepción de éxito en cada acción. |
