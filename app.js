const express = require("express")
const mongoose = require("mongoose")

const app = express()
// ! connect to the mongodb database

mongoose.connect("mongodb://localhost/blogg app", {
useNewUrlParser: true,
useUnifiedTopology: true,
} ,
() => {
     console.log("connection to mongodb was successfull")
} )

app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.set("view engine", "ejs")


app.listen(3000, () => console.log("server started listening on port: 3000"))