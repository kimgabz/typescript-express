import { Router, Request, Response } from 'express';

const router = Router();

const resHTML = `
    <div>
        <h1>Hello from route - Typescript world!</h1>
    </div>
`;
router.get('/', (req: Request, res: Response) => {
    res.send(resHTML);
});


export { router };