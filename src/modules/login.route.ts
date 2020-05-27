import { Router, Request, Response } from 'express';

interface RequestWithBody extends  Request {
    body: { [key: string]: string | undefined }
}

const router = Router();

const resHTML = `
    <form method="POST">
        <div>
            <label>Email</label>
            <input name="email"/>
        </div>
        <div>
            <label>Password</label>
            <input name="password" type="password"/>
        </div>
        <button>Submit</button>
    </form>
`;
router.get('/login', (req: RequestWithBody, res: Response) => {
    res.send(resHTML);
});

router.post('/login', (req: RequestWithBody, res: Response) => {
    const { email, password } = req.body;

    if (email) {
        res.send(email + password);
    }
    else {
        res.send('missing email');
    }

});

export { router };