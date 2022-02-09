//install and require express library to create  server  
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const { randomUUID } = require('crypto');
//console.log(randomUUID());

const connection = mysql.createConnection({
    host: '20.126.65.172',
    user: 'adeleke',
    password: 'test1234',
    database: 'mydb'
});

connection.connect((err)=>{
    if(err){
        return console.error('error: '+ err.message);
    }
    console.log('Connected to the MySQL server...');
})

//instatiate express library
const app = express();

let sql = `SELECT * FROM mytable`; 
    connection.query(sql, (error, results, fields) => { 
        if (error) { 
            return console.error(error.message); 
        } 
         
        const resaz = JSON.stringify(results);
        const dd = results;
        console.log(results);
        if(results[1].uuid){
            console.log('uuid exist in table');
        }else{
            connection.query("ALTER TABLE mytable ADD COLUMN uuid VarChar(50) NOT NULL",
            (error, results, fields) => { 
                if (error) { 
                    return console.error(error.message); 
                } 
                console.log('updated the database with column uuid');
                console.log(results); 
            })
        }
    }); 
    //connection.end();

    
const person = { "survived": true, "passengerClass": 3, "name": "Mr. Owen Harris Braund", "sex": "male", "age": 22, "siblingsOrSpousesAboard": 1, "parentsOrChildrenAboard":0, "fare":7.25}
// endpoint to handle get request to '/people' route
app.get('/people', (req, res)=> {
 
    let sql = `SELECT * FROM titanic_table`; 
    connection.query(sql, (error, results, fields) => { 
        if (error) { 
            return console.error(error.message); 
        } 
        console.log(results); 

        res.send(results);
    }); 
    connection.end();
})

// endpoint to handle post request to '/people' route
app.post('/people', (req, res)=> {
    
})

// endpoint to handle get request to '/people/uuid' route
app.get('/people/{uuid}', (req, res)=> {
    
})

app.delete('/people/{uuid}', (req, res)=> {
    
})


app.put('/people/{uuid}', (req, res)=> {
    
})

// start the api server and transmitting on port 4000
app.listen(4001, ()=> {
    console.log('Server is running on port 4000...');
});
