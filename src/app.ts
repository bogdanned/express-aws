import express, {Response, Request}  from 'express';

const app = express();

app.get("/", (req: Request,res: Response) => (res.json({test: "hello world!", code: 5000})))

export default app;
