const express = require("express")
const fs = require("fs")
const app = express()
app.set("views","views")
app.set("view engine", "hbs")
app.use(express.static("public"))
app.use(express.json())
var data = require("./students.json")
var ob = {
    a:"Student id", b:"Student name",x: "Student Registration", y: "Add student"
}
app.get("/", (req,res)=>{
    res.render("index",ob)
})
app.get("/students", (req,res)=>{
    res.json(data)
})
app.post("/students", (req,res)=>{
    console.log(req.body)
    data.push(req.body)
    fs.writeFileSync("./students.json", JSON.stringify(data, null, 2))
    res.end()
})
app.listen(3000)