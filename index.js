const app = require("express")();

app.get("/",(req,res) => {
    return res.send("Hello Word")
})

app.get("*",(req,res) => res.sendStatus(404))

app.listen(5000,() => console.log("Server on http://localhost:5000"))

