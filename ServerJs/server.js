const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(
  jsonServer.rewriter({
    '/api/*': '/$1'
  })
)

server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

server.use('/pension-plan/deduct',(req, res, next) => {
  console.log('POST Server is running')
  if (req.method === 'POST') {
    const companyPensionPlan = req.query.companyPensionPlan;
    const personPensionPlan = req.query.personPensionPlan;
    const taxBase = req.query.taxBase;

    console.log(companyPensionPlan)
    console.log(personPensionPlan)
    console.log(taxBase)

    if (parseInt(companyPensionPlan) === 8500 &&
        parseInt(personPensionPlan) === 1500 && 
        parseInt(taxBase) === 60000) {
            console.log('The result is 4500')
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end('4500')
    }

    if (parseInt(companyPensionPlan) === 8500 &&
        parseInt(personPensionPlan) === 1500 && 
        parseInt(taxBase) === 500000) {
            console.log('The result is 4700')
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end('4700')
    }
  } 
})
  // Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
    console.log('GET Server is running')
    res.json(4500)
  })
  
server.use(router)

server.listen(3001, () => {
  console.log('JSONs Server is running')
})