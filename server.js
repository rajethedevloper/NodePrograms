const express = require("express")
const mongoose = require("mongoose")
const app = express()

app.use(express.json());

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is mandatory"]
    }, price: {
        type: Number,
        required: [true, "Price is mandatory"]
    }, quantity: {
        type: Number,
        required: [true, "Quantity is mandatory"]
    }, category: {
        type: String,
        enum: ["Clothing", "Electronics", "HouseHold"]
    },

}, { timestamps: true })
//mdoel creation


mongoose.connect("mongodb://localhost:27017/Students")
    .then(() => {
        console.log("DB connection successful")
    })
    .catch((err) => {
        console.log(err)
    })


const productmodel = mongoose.model("abc", productSchema)

app.get("/product", (req, res) => {
    console.log("this is get api call")
    res.send({ message: "Get request access" })
})
app.get("/users", (req, res) => {
    res.send({ message: "no users data found" })
})

app.get("/names", (req, res) => {
    res.send({ message: "this pi is for names" })
})
app.post("/product", (req, res) => {
    //
    //console.log(req)
    let product = req.body;
    productmodel.create(product)
        .then((document) => {
            return res.send({ data: document, message: "Product created" })
        })
        .catch((err) => {
            n
            console.log(err)
            return res.send({ message: "Some problem" })
        })
    //console.log(req.body)
    // res.send({Message:"post is working"})
})


app.listen(8000)