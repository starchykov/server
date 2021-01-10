// const http = require('http');
// const app = require('./app');
// const port = 6001;
//
// const server = http.createServer(app);
//
// server.listen(port,() => console.log(`Server is working on port ${port}`));

const app = require('./app');
const port = process.env.PORT || 6001

//server listening
app.listen(port, () => console.log(`Server is working on port ${port}`)
);