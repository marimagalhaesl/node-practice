const express = require ("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));


app.get("/", function(req, res){
    res.sendFile("index.html");
})


app.post("/", function(req, res) {
    console.log(req.body);
    res.status(200).json({
        message: "Hello form the backend!"
    })
})


app.listen(3000, function() {
    console.log("Server up");
})
