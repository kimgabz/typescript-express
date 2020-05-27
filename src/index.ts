import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session'

import { router } from './modules/login.route';

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

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
