/**
 * Created by astitwa on 10/10/16.
 */

const mysql=require('mysql');


var getConnection=()=>{
    var connection=mysql.createConnection({
        host: 'localhost',
        user: 'newuser',
        password: 'newpassword',
        database: 'newdatabase'
    });
    connection.connect();
    return connection;
}

module.exports={
    save: (data,cb)=>{
        let connection=getConnection();
        data='<li>'+data+'</li>';
        connection.query('INSERT INTO chatdata VALUES ("'+data+'")',function (err) {
            if(err)throw err;
        });

        connection.end();
        cb();
    },
    load: (cb)=>{
        let connection=getConnection();
        connection.query('SELECT * FROM chatdata',(err,rows)=>{
            console.log(rows);
            if(err)throw err;
            cb(rows);
        })
    }
}