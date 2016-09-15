const http = require('http')
let express = require('express');
let app = express();
const port = process.env.PORT || 8080
const server = http.createServer(app)
                .listen(port, () => {
                  console.log('it worked!' + port)
                })

app.use(express.static('./'))
app.use(express.static('./dist'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

process.on('SIGTERM', server.close.bind(server))
