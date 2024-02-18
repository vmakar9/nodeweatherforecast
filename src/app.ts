import express from "express"
import cors from "cors"
import {configs} from "./configs/config";
import {weatherRouter} from "./router/weather.router";



const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));


app.use('/weather',weatherRouter)

app.listen(configs.PORT,async ()=>{
    console.log(`Server is started on ${configs.PORT}`)
})