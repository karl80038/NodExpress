const express = require("express");
const app = express();
const bodyParser = require('body-parser');
//Give access to the public folder
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){

    res.sendFile(__dirname + "/index.html")
    console.log(__dirname);
});

app.post("/", function(req, res) {
    let num1 = Number(req.body.number1);
    let num2 = Number(req.body.number2);
    let sum = num1 + num2;
    res.send(`Your result is ${sum}`);
    console.log(num1);
    console.log(num2);
})

app.get("/contact", function(req, res) {
    res.send("<h3>karl80038@gmail.com<h3>");
});

app.listen(3000, function(){
    console.log("Server's running on Port 3000.");
} );