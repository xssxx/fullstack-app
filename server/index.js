const express = require('express')
const cors = require('cors')
const ProductRoute = require('./routes/ProductRoutes')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(ProductRoute)

app.listen(process.env.PORT, () => {
    console.log('Server running...')
})