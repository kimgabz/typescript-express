import express from 'express';
import { router } from './modules/login.route';

const app = express();

const PORT = 3000;

app.use(router);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
