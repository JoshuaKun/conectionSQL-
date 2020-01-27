const sql = require("mssql");
const express = require('express');
const app = express()


app.get('/', function (req, res) {
   

    

    // config for your database
    var config = {
        user: 'user_bd',
        password: 'pass',
        server: 'server', 
        database: 'user_bd' ,
        
        
    };
    
    // connect to your database
    sql.connect(config, function (err) {
    
        if (err){
            res.json({

                conection:'hubo problemas al  conectar  con la BD',
                messaje:err
            });
            
        }
    
        // create Request object
        const request = new sql.Request();
           
        // query to the database and get the records
        request.query('\n', function (err, recordset) {
            
            

            // send records as a response
            res.json(recordset)[0];

        
            
        });
    });
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});


