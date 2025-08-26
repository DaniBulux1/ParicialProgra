// Array en memoria para almacenar tareas
let tasks = [];
let currentId = 1;

// Listar todas las tareas
export const getAllTasks = (req, res) => {
    res.json(tasks);
};

// Listar solo tareas completadas
export const getCompletedTasks = (req, res) => {
    const completed = tasks.filter(task => task.completed === true);
    res.json(completed);
};

// Ver detalles de una tarea
export const getTaskById = (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({ error: "La tarea no fue encontrada, vuelve a intentarlo." });
    }

    res.json(task);
};

// Crear nueva tarea
export const createTask = (req, res) => {
    const { title } = req.body;

    if (!title || title.trim() === "") {
        return res.status(400).json({ error: "El campo de titulo es obligatorio." });
    }

    const newTask = {
        id: currentId++,
        title,
        completed: false
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
};

// Actualizar tarea
export const updateTask = (req, res) => {
    const id = parseInt(req.params.id);
    const { title, completed } = req.body;

    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({ error: "La tarea no fue encontrada" });
    }

    if (title !== undefined) task.title = title;
    if (completed !== undefined) task.completed = completed;

    res.json(task);
};

// Eliminar tarea
export const deleteTask = (req, res) => {
    const id = parseInt(req.params.id);
    const index = tasks.findIndex(t => t.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "Tarea no encontrada" });
    }

    const deleted = tasks.splice(index, 1);
    res.json(deleted[0]);
};
