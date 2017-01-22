var socket = io();
var userName = document.querySelector('#chat-username');
var message = document.querySelector('#chat-message');
socket.on('connect', function () {
    var chatForm = document.forms.chatForm;
    if (chatForm) {


        chatForm.addEventListener('submit', function (e) {
            e.preventDefault();
            socket.emit('postMessage', {
                user: userName.value,
                msg: message.value
            });

            message.value = "";
            message.focus();
        });
    }

});

socket.on('updateMessage', function (data) {
    showMessage(data);
});
var showMessage = function (data) {
    var chatDispaly = document.querySelector('.chat-display');
    var newMsg = document.createElement('p');
    if (userName.value === data.user) {
        newMsg.className = 'bg-success chat-text';
    }
    else {
        newMsg.className = 'bg-info text-warning chat-text';
    }

    newMsg.innerHTML = '<strong>' + data.user + '</strong>:' + data.msg;
    chatDispaly.insertBefore(newMsg, chatDispaly.firstChild);
}