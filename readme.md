

# 📚 Consulta de Becarios - Proyecto Full Stack

Aplicación web que permite consultar becarios desde una base de datos SQLite. Desarrollada con **React** en el frontend, **Express** en el backend, y una base de datos local llamada `becal_sqlite.db`.

---

## 🧩 Estructura del Proyecto


prueba-becarios/ ├── backend/              → Servidor Express │   ├── index.js │   └── package.json ├── frontend/             → App React │   ├── src/ │   │   ├── App.js │   │   └── Becarios.js │   └── package.json ├── becal_sqlite.db       → Base de datos SQLite


---

## ⚙️ Tecnologías utilizadas

- **Frontend**: React + Axios
- **Backend**: Node.js + Express + SQLite3
- **Base de datos**: SQLite (`BECAL_IMPORTADO`)
- **Entorno**: Visual Studio Code + PowerShell + Opera GX

---

## 🚀 Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd prueba-becarios

2. Backend

cd backend
npm install
node index.js

Servidor corriendo en http://localhost:3001

3. Frontend

cd frontend
npm install
npm start

App React en http://localhost:3000

🗃️ Base de datos

El archivo becal_sqlite.db contiene la tabla BECAL_IMPORTADO con los siguientes campos relevantes:

NOMBRES

APELLIDOS

INSTITUCION_DESTINO

NOMBRE_PROGRAMA_ESTUDIO

(y otros campos académicos y personales)

🧠 Funcionalidades actuales

Consulta de becarios desde la base de datos

Visualización en React mediante Axios

Manejo de errores y conexión entre frontend y backend

🧪 Errores solucionados

✅ 500 Internal Server Error: se corrigió la ruta /becarios para apuntar a la tabla real BECAL_IMPORTADO

✅ SQLITE_ERROR: no such table: se verificó el nombre exacto de la tabla

✅ Problemas con DevTools en Opera GX: se usó Ctrl + Shift + I para abrir la consola

📌 Próximos pasos sugeridos

Mostrar los datos en una tabla con estilos

Agregar filtros por universidad, país o programa

Exportar resultados a Excel o PDF

Preparar presentación o video explicativo

👨‍💻 Autor

MatiasEstudiante de Ingeniería en Informática
