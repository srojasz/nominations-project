const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const members = [
    {
      "email": "newcandidate@gmail.com",
      "description": "new candidate would be an awesome adition to Nova due to its outstanding experience and good humour",
      "score": {
        "involvement": 8,
        "talent": 10
      }
    },
    {
      "email": "newcandidate@gmail.com",
      "description": "new candidate would be an awesome adition to Nova due to its outstanding experience and good humour",
      "score": {
        "involvement": 8,
        "talent": 10
      }
    }
  ];

server.use(jsonServer.bodyParser)
server.post('/members', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    console.log(req.body);
    members.push(req.body);
    res.jsonp(members)
})

server.get('/members', (req, res) => {
    res.jsonp(members)
})

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})