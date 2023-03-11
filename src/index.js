const express = require('express');
const bodyParser = require('body-parser');
const City = require('./models/index');
const {PORT}=require('./config/serverConfig');
// const CityRepository = require('./repository/city-repository');


const ApiRoutes = require('./routes/index');

const  setupAndStartServer =async()=>{
    // create express object

    const app = express();
    
    app.use(bodyParser.json()); // middleware
    app.use(bodyParser.urlencoded({extended: true})); // middleware

    app.use('/api', ApiRoutes);


    app.listen(PORT, async ()=>{
        console.log(`Server started at ${PORT}`);
        // const repo = new CityRepository();
        // repo.createCity({name:"muzaffarpur"});
        // repo.deleteCity(1);
        // repo.updateCity(12,{name:"chandigarh"});
        // console.log(await repo.getCity(12)); 
    });
}

setupAndStartServer();