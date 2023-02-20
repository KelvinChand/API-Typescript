//TypeScript

import express , {Application,Request,Response,NextFunction} from "express";

const app: Application = express();
const port: Number = 80;

app.use("/health", (req: Request, res: Response ,next: NextFunction) => {
    res.status(200).send({status: "200"});
});

app.listen(port,()=> console.log(`Server is Listening on port ${port}`));