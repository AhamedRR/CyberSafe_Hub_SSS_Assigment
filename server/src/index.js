const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors")

const app = express();
const port = 8080;
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
try {
    
    mongoose.connect('mongodb+srv://Ahamed:Ahamed@cluster0.z7gkuaa.mongodb.net/', { useNewUrlParser: true });
    console.log("dataBase connected")
} catch (error) {
    console.log("dataBase not connected")
}


const UserRoutes = require("./Routes/UserRoutes")
app.use("/user",UserRoutes)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
