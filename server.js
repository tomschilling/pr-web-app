
var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');
var url = require('url');



// MY SQL Connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bmvzDB'
});


app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());




// Connect to mysql
connection.connect(function (err) {
    if (err) {
        console.log('Error!');
    } else {
        console.log('Success!');
    }
});


// getAllInstitutions
app.get('/institutionlist', function (req, res) {
    // Parse out query string
    // /institutionlist?kvregion=kvBerlin&plz=123456
    var queryData = url.parse(req.url, true).query;
    
    // {"Kvregion":["kvBerlin","KvSachen"]}
    console.log(queryData)

    // use query values in mysql query

    // filter kvregion + plz
    var whiteList = ['institutionPLZ', 'institutionKvRegion', 'institutionFachgruppe', 'institutionAusrichtung'];
    var conditions = [];
    var mysqlQuery = 'SELECT * FROM tblInstitution';
    // institutionIdPk, institutionKvRegion, institutionName, institutionStrasse, institutionPLZ, institutionOrt, institutionEmail, institutionAnsprechpartner
    
    for (key in queryData) {
        // Check that the key is kvregion or plz, and that the value exists.
        var data = queryData[key];
        if (whiteList.indexOf(key) > -1 && data) {
            // WHERE key=value AND key2=value2
            // {"Kvregion":["kvBerlin","KvSachen"]}
            if (data.constructor === Array) {
                var temp = [];
                data.forEach(function(d) {
                    temp.push(key + '=' + "'" + d + "'");
                });
                conditions.push('(' + temp.join(' OR ') + ')');
                continue;
            }
            conditions.push(key + '=' + "'" + data + "'");
        }
    }

    if (conditions.length > 0)  {
        mysqlQuery += ' WHERE ' + conditions.join(' AND ');
    }
    
    console.log(mysqlQuery);
    connection.query(mysqlQuery, function(err, doc) {

        res.json(doc);

    });

});



// createInstitution
app.post('/institutionlist',function(req,res){

    var input = JSON.parse(JSON.stringify(req.body));


    var data = {

        institutionKvRegion: input.institutionKvRegion,
        institutionName: input.institutionName,
        institutionStrasse: input.institutionStrasse,
        institutionPLZ: input.institutionPLZ,
        institutionOrt: input.institutionOrt,
        institutionEmail: input.institutionEmail,
        institutionAnsprechpartner: input.institutionAnsprechpartner,
        institutionWebsite: input.institutionWebsite,
        institutionFachgruppe: input.institutionFachgruppe,
        institutionAusrichtung: input.institutionAusrichtung

    };

    connection.query("INSERT INTO tblInstitution SET ? ",data, function(err, rows)

    {

        if (err)
            console.log("Error inserting : ",err );

    });


});


// deleteInstitution
app.delete('/institutionlist/:id', function(req, res) {

    var id = req.params.id;

    connection.query('DELETE FROM tblInstitution WHERE institutionIdPk = ?', id, function (err, rows) {

        if (err) console.log(err)
        else console.log('Successful deleting' + rows);

        res.json(rows);
    });

});



// getSingleInstitution
app.get('/institutionlist/:id', function (req, res) {

    var ID = parseInt(req.params.id);
    console.log(ID);

    connection.query('SELECT * FROM tblInstitution WHERE institutionIdPk = ?', [ID], function (err, doc) {

        if (err)  console.error('Error while single getting. Err: ' + err);

        res.json(doc[0]);
    });

});


// updateInstitution
app.put('/institutionlist/:id', function(req,res) {

    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;


    var data = {

        institutionKvRegion: input.institutionKvRegion,
        institutionName: input.institutionName,
        institutionStrasse: input.institutionStrasse,
        institutionPLZ: input.institutionPLZ,
        institutionOrt: input.institutionOrt,
        institutionEmail: input.institutionEmail,
        institutionAnsprechpartner: input.institutionAnsprechpartner,
        institutionWebsite: input.institutionWebsite,
        institutionFachgruppe: input.institutionFachgruppe,
        institutionAusrichtung: input.institutionAusrichtung

    };

    connection.query("UPDATE tblInstitution SET ? WHERE institutionIdPk = ? ", [data, id], function (err, rows) {

        if (err)
            console.log("Error Updating : ", err);

    });
});


app.listen(3000);
console.log("Server running on port 3000");