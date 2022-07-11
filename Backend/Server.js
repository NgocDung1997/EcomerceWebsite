import express from "express";
import data from "./Data.js"
const app = express();
app.get('/',(req,res)=>{
    res.send('Server is ready at http://localhost:3000');
});
app.get('/api/products/',(req,res)=>{
    res.send(data.products)
})

app.get('/api/products/:id',(req,res)=>{
    //res.send(data.products)
    res.send(data.products.find(x => x._id == req.params.id.toString()))
})

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`)
})
