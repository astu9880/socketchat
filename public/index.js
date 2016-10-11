/**
 * Created by astitwa on 10/9/16.
 */
var socket=io();

$(function () {

    var username='Anon';
    socket.on('preload',(data)=>{
        if(data)
        $('#messages').html(data);
    })
    $('#send').click(function () {
        socket.emit('chat',username+': '+$('#chatbox').val())
    });
    socket.on('chat',(data)=>{
        $('#messages').prepend('<li>'+data+'</li>');
    });
    $('#setname').click(function () {
        username=$('#username').val();
    });
});

