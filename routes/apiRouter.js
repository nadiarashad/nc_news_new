const apiRouter = require('express').Router()
const topicsRouter = require('../routes/topicsRouter')
const usersRouter = require('../routes/usersRouter')
const articlesRouter = require('../routes/articlesRouter')
const commentsRouter = require('../routes/commentsRouter')
const handle405s = require('../errors/errors')

apiRouter.use('/users', usersRouter)
apiRouter.use('/articles', articlesRouter)
apiRouter.use('/comments', commentsRouter)
apiRouter.use('/topics', topicsRouter)
apiRouter.route('/').all((req, res) => {
    res.status(405).send({ msg: 'Route not found' })
})

module.exports = apiRouter