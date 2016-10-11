/**
 * Created by astitwa on 10/9/16.
 */
const express=require('express');
const app=express();
const server=require('http').Server(app);
const io=require('socket.io')(server);
const db=require('./db');


app.use('/',express.static(__dirname+'/public'));

io.on('connection',(socket)=>{

    db.load((rows)=>{
        var ret='';
        for(i=rows.length-1;i>=0;i--)
            ret=ret+rows[i].message;
        socket.emit('preload',ret);
    })


    socket.on('chat',(data)=>{
        io.emit('chat',data);
        db.save(data,()=>{
        })
    });
    //socket.broadcast.emit: for everyone except this user
});


server.listen(4444);
