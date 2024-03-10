const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Ready on port ${port}`)
})

app.get("/", (req, res) => { // slash means the landing page
  res.send("Hi! Welcome to my API!") // res.send sends a html
})

app.get("/api/test", (req, res) => {
  res.json({
    text: "Hello!"
  })
})

