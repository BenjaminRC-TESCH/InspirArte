<h1 align="center"> 📌Sistema tipo pinterest</h1>

<p align="center">
Es una plataforma visual inspirada en Pinterest que permite a los usuarios explorar, compartir y descubrir imágenes de diferentes temáticas. Cada usuario puede subir sus propias imágenes para mostrarlas a la comunidad, así como interactuar con el contenido de otros dando "me gusta" a las publicaciones que más les interesen. El sistema fomenta la creatividad y la interacción, ofreciendo un espacio dinámico para guardar, inspirarse y compartir ideas a través de imágenes.
</p>

---

Este proyecto está compuesto por un **backend** desarrollado en **Node.js con Express** y una base de datos en **MongoDB**, junto con un **frontend** en **Angular**. Ambos módulos están organizados en carpetas separadas para facilitar su administración y despliegue.

---

## 🚀 Tecnologías Utilizadas

### 🔹 Backend
- Node.js
- Express
- MongoDB(Mongoose)
- JWT

### 🔹 Frontend
- Angular
- TypeScript
- HTML, CSS, Bootstrap

---

## 📂 Estructura del Proyecto
/project-root
├── backend/ # Código del servidor (API REST con Node.js, Express, MongoDB)
│ ├── src/
│ ├── package.json
│ └── ...
│
├── frontend/ # Aplicación cliente en Angular
│ ├── src/
│ ├── angular.json
│ └── ...
│
└── README.md # Documentación del proyecto

---

## ⚙️ Instalación y Configuración

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/BenjaminRC-TESCH/InspirArte.git
cd proyecto
```

2️⃣ Configuración del Backend
```bash
cd backend
npm install
```

Crear un archivo .env en la carpeta backend/ con las variables necesarias:
```bash
PORT=4000
MONGO_URI=mongodb://localhost:27017/inspirarte
JWT_SECRET=tu_clave_secreta
```

Ejecutar el servidor:
```bash
npm run dev
```
El backend se ejecutará en http://localhost:4000.

3️⃣ Configuración del Frontend
```bash
cd ../frontend
npm install
```
Ejecutar la aplicación:
```bash
ng serve
```

<h2 align="center">FUNCIONAMIENTO DEL SISTEMA</h2>
<p align="center"> 
  <img width="48% alt="Screenshot_1" src="https://github.com/user-attachments/assets/61cf8e1f-2250-480b-850d-2680dde456f6" />
  <img width="48% alt="Screenshot_2" src="https://github.com/user-attachments/assets/3ff89f4a-2c8b-47d9-9001-d6d18ef16b42" />
</p> 

<p align="center"> 
  <img width="48% alt="Screenshot_3" src="https://github.com/user-attachments/assets/06d7e90b-c03f-4177-9866-c96482b2c3cb" />
  <img width="48% alt="Screenshot_4" src="https://github.com/user-attachments/assets/14772338-2364-4e05-8467-e301d155b5ee" />
</p> 

<p align="center"> 
  <img width="48% alt="Screenshot_5" src="https://github.com/user-attachments/assets/c61ca23b-0781-4d60-8480-67dd01f4e445" />
  <img width="48% alt="Screenshot_6" src="https://github.com/user-attachments/assets/73dae760-969c-475f-ad41-118de3c7081d" />
</p> 

<p align="center"> 
  <img width="48% alt="Screenshot_7" src="https://github.com/user-attachments/assets/13fd0a18-5bfc-4812-899d-5de1b451efcb" />
  <img width="48% alt="Screenshot_8" src="https://github.com/user-attachments/assets/95fbb884-e56e-4250-b158-1b04f0781fd5" />
</p> 

<p align="center"> 
  <img width="48% alt="Screenshot_9" src="https://github.com/user-attachments/assets/5a98ce49-ec95-4b83-8c29-a6b4b48ef249" />
  <img width="48% alt="Screenshot_10" src="https://github.com/user-attachments/assets/d81e1829-bca1-47aa-a41b-39bad3337d91" />
</p> 

