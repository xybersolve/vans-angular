const express = require('express')
const graphqlHTTP = require('express-graphql').graphqlHTTP()
const schema = require('./schema.js')
const app = express()

//app.use('/graphql', graphqlHTTP())
app.use(
    '/graphql',
    graphqlHTTP({
      schema: schema,
    })
  )

app.listen(5050, () => {
  console.log('App listening on port 5050')
})