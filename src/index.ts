import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session'

import { router } from './modules/login.route';
import { AppRouter } from './AppRouter';

import './modules/login.controller';

const app = express();

const PORT = 3000;

app.use(cookieSession({ 
    keys: ['any_string']
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(router);
app.use(AppRouter.getInstance());

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
