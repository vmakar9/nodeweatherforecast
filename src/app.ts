import express from "express"
import {configs} from "./configs/config";
import {weatherRouter} from "./router/weather.router";



const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/weather',weatherRouter)

app.listen(configs.PORT,async ()=>{
    console.log(`Server is started on ${configs.PORT}`)
})