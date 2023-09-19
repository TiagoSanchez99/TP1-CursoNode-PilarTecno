import express from 'express'
import {router as starsRouter} from './routes/stars.router'

const app = express()
const PORT = 3000

app.use(express.json())

app.use('/stars', starsRouter)

app.listen(PORT, () => {
    console.log('Servidor express iniciado en puerto:', PORT)
})