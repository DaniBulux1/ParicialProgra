# API REST de Gestión de Tareas

Esta API permite gestionar tareas internas de un equipo de trabajo.
Está desarrollada en **Node.js** usando **Express** y almacena los datos en un array en memoria.

---

## 🛠️ Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/tareas-api.git
cd tareas-api
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta la aplicación:

```bash
node app.js
```

El servidor se iniciará en:

```
http://localhost:3000
```

---

## ⚡ Endpoints

Todos los endpoints usan la ruta base:

```
http://localhost:3000
```

---

### 1️⃣ Listar todas las tareas

* **Método:** GET
* **URL:** `/tasks`
* **Ejemplo con curl:**

```bash
curl -X GET http://localhost:3000/tasks
```

* **Respuesta esperada:**

```json
[
  {
    "id": 1,
    "title": "Revisar informe financiero",
    "completed": false
  }
]
```

---

### 2️⃣ Listar solo tareas completadas

* **Método:** GET
* **URL:** `/tasks/completed`
* **Ejemplo con curl:**

```bash
curl -X GET http://localhost:3000/tasks/completed
```

* **Respuesta esperada:** Array con solo las tareas marcadas como `completed: true`.

---

### 3️⃣ Ver detalles de una tarea por ID

* **Método:** GET
* **URL:** `/tasks/:id`
* **Ejemplo con curl:**

```bash
curl -X GET http://localhost:3000/tasks/1
```

* **Respuesta si existe:**

```json
{
  "id": 1,
  "title": "Revisar informe financiero",
  "completed": false
}
```

* **Respuesta si no existe:**

```json
{ "error": "Tarea no encontrada." }
```

---

### 4️⃣ Crear una nueva tarea

* **Método:** POST
* **URL:** `/tasks/tasks`
* **Headers:** `Content-Type: application/json`
* **Body:**

```json
{
  "title": "Hacer reporte semanal"
}
```

* **Ejemplo con curl:**

```bash
curl -X POST http://localhost:3000/tasks/tasks \
-H "Content-Type: application/json" \
-d '{"title":"Hacer reporte semanal"}'
```

* **Respuesta esperada:**

```json
{
  "id": 2,
  "title": "Hacer reporte semanal",
  "completed": false
}
```

* **Error si no se envía título:**

```json
{ "error": "El título de la tarea es obligatorio." }
```

---

### 5️⃣ Actualizar tarea (cambiar título o completar)

* **Método:** PUT
* **URL:** `/tasks/:id`
* **Body (ejemplo):**

```json
{
  "title": "Hacer reporte actualizado",
  "completed": true
}
```

* **Ejemplo con curl:**

```bash
curl -X PUT http://localhost:3000/tasks/2 \
-H "Content-Type: application/json" \
-d '{"title":"Hacer reporte actualizado","completed":true}'
```

* **Respuesta:** Devuelve la tarea actualizada o error 404 si no existe.

---

### 6️⃣ Eliminar tarea

* **Método:** DELETE
* **URL:** `/tasks/:id`
* **Ejemplo con curl:**

```bash
curl -X DELETE http://localhost:3000/tasks/2
```

* **Respuesta:** Devuelve la tarea eliminada o error 404 si no existe.

---

## 🔹 Notas importantes

* Todas las tareas se almacenan en memoria, por lo que se **perderán al reiniciar el servidor**.
* Se recomienda siempre usar la misma ID que devuelve la creación de la tarea para actualizarla o eliminarla.
* Para POST y PUT recuerda siempre enviar el header:

```
Content-Type: application/json
```

## 📝 Postman

Si usas Postman, puedes crear requests con los mismos endpoints y body que los ejemplos `curl`.
Recuerda configurar **Content-Type: application/json** para POST y PUT.
