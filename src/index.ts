import express, {Request, Response} from 'express'
import {productRoute} from "./routes/product-router";
import bodyParser from "body-parser";

const app = express()
const port = 3000

const parserMidleweare = bodyParser({})
app.use(parserMidleweare)
app.get('/', (req: Request, res: Response) => {
    res.send({title: 'lolxsxsx!!d'})
})

app.listen(port, () => {
    console.log(`Example app listxxening on port ${port}`)
})

app.use('/product', productRoute)
