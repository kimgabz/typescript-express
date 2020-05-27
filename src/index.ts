import express, { Request, Response } from 'express';

const app = express();

const PORT = 3000;

const resHTML = `
    <div>
        <h1>Hello Typescript world!</h1>
    </div>
`;
app.get('/', (req: Request, res: Response) => {
    res.send(resHTML);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
