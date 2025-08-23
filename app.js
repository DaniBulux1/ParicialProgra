import express from 'express';
import router from './routes/taskRoutes.js';

const app = express();
app.use(express.json());

//configuracion del servidor
app.use(router);
app.listen(3000, () => {
    console.log('Servidor socando en el puerto 3000');
}
);