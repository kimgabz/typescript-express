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
        // res.send(email + password);
        req.session = {loggedIn: true};
        res.redirect('/');

    }
    else {
        res.send('missing email');
    }

});


router.get('/', (req: Request, res: Response) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
            <div>
                <h1>Welcome to Summoner's Rift</h1>
                <a href="/logout">Logout</a>
            </div>
        `);
    }
    else {
        res.send(`
            <div>
                <h1>You are not logged in</h1>
                <a href="/login">Login</a>
            </div>
        `);
    }

});

router.get('/logout', (req: Request, res: Response) => {
    req.session = undefined;
    res.redirect('/');
});

export { router };