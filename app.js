const express = require('express')
const app = express();
app.use(express.json());
const apiRouter = require('./routes/apiRouter')
const { handleCustomErrors, pSQLErrorsHandler, handle404s, handle405s } = require('../be-nc-news/errors/errors')


app.use('/api', apiRouter)

app.use('/*', handle404s)

app.use('/*', handle405s)

app.use(pSQLErrorsHandler)

app.use(handleCustomErrors)


module.exports = app