const express = require('express');
const http = express();
http.get('/', (req, resp) => {
    resp.send(`
    <h1>This is the Home Page</h1>
    <a href='/about'>Goto About</a>
    `);
});
http.get('/about', (req, resp) => {
    resp.send(`
          <h1> This is the About Page</h1>
          <a href='/'>Goto Home</a>
    `)
})
http.listen(3000);