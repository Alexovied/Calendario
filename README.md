Proyecto Integrador Anual: PDISC / PWD (2026)
EEST N°1 "Eduardo Ader" - 7° 2º Año - Prof. York / Prof. Balda

Descripción del Proyecto
Este proyecto consiste en un **Calendario Interactivo**, una herramienta web organizativa enfocada en la facilidad de uso y la adaptabilidad. Resuelve la necesidad de llevar un control de fechas y eventos, orientándose principalmente al sector educativo y de uso personal. Actualmente incluye un formato dinámico con modos visuales y en el futuro se planea integrar almacenamiento de datos de forma persistente.

Equipo de Desarrollo
- **Alex Oviedo** - (Líder de Proyecto / Frontend / Backend)


Stack Tecnológico
- **Lenguaje:** JavaScript Vanilla (Actual) / Python 3.11+ (Backend)
- **Base de Datos:** MySQL / MariaDB (XAMPP)
- **Entorno:** Visual Studio Code
- **Control de Versiones:** Git / GitHub

Arquitectura del Sistema
Este proyecto sigue una Arquitectura de Tres Capas:
- **Capa de Presentación (Frontend):** HTML5, CSS3 puro y JavaScript.
- **Capa de Negocio (Backend):** Lógica en Python (próxima integración).
- **Capa de Datos:** Persistencia en MySQL mediante sentencias SQL puras (evitar ORMs para la defensa técnica).

Estructura del Repositorio
```text
Calendario/
├── css/                # Hojas de estilo
├── js/                 # Código JavaScript
├── index.html          # Vista HTML principal
├── .gitignore          # Archivos excluidos (venv, __pycache__)
├── LICENSE             # Licencia MIT del colegio
└── README.md           # Este archivo
```
*(Nota: la estructura irá mutando hacia la recomendada por la cátedra al integrar Flask `src/app.py`)*

Instalación y Ejecución
1. Clonar repositorio:
   ```bash
   git clone https://github.com/Alexovied/Calendario.git
   ```

2. Ejecución de la etapa Front-End actual:
   - Simplemente abre el archivo `index.html` en cualquier navegador web.

*(Los pasos 3 y 4 de creación de entorno virtual y ejecución de Flask con base de datos se aplicarán en la siguiente etapa del desarrollo).*

Licencia
Este proyecto se distribuye bajo la licencia MIT. Ver archivo `LICENSE`.
