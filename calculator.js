const express = require("express");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/index.html");
})

app.post("/", (req, res) =>{
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const result = num1 + num2;
    res.send("Result of that calculation is:  " + result);
})


app.listen("3000", () => {
    console.log("Server Listining at Port 3000");
});