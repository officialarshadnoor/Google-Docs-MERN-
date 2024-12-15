import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3030;

app.get('/', (req: Request, res: Response) => {
    res.send('Express + Typescript Server');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})