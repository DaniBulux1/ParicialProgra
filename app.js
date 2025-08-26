import express from 'express';
import router from './routes/taskRoutes.js';

const app = express();
app.use(express.json());

//configuracion del servidor
app.use(router);
app.listen(3000, () => {
    console.log('Ahora el servidor esta localizado en el puerto 3000');
}
);