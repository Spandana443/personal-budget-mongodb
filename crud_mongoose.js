const mongoose = require('mongoose')
const budgetModel = require('./models/budget_schema')


let url = 'mongodb://localhost:3000/personal_budget_mongodb';

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Connected to database")
    // Fetch
    budgetModel.find({})
    .then((data)=>{
        console.log(data);
        mongoose.connection.close();
    })
    .catch((connectionError)=>{
        console.log(connectionError)
    })
})
.catch((connectionError)=>{
    console.log(connectionError);
})

