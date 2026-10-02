const express = require("express");
const app = express();

app.get("/itmp", (req, res) => {
  res.send("Hello ITMP!");
});



app.listen(3000, () =>{
    console.log("A szerver a 3000-es porton fut")
})

app.get("/nodejs",(req,res) => {
    res.send("A Node.js egy olyan szerveroldali JavaScript futtatókörnyezet, amely a V8 JavaScript motorra épül.")
})
app.get("/express",(req,res) => {
    res.send("Az Express egy minimalista webes keretrendszer, amely a Node.js-hez készült.")
})