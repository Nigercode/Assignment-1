const http = require ('http')

const hostname = 'localhost'
const port = '8900'
 

const server = http.createServer(reqHandler)


server.listen(port, hostname, () => {
    
    console.log(`server started sucessfully at http://${hostname}:${port}`)
  
     }
    
)
function reqHandler(req, res) {
     res.end('Balogun-Lawal Aminat')
}











