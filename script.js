// script.js
document.addEventListener('DOMContentLoaded', () => {
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');
    const messageInput = document.getElementById('message');
    const addMessageButton = document.getElementById('add');
    const messageList = document.getElementById('message-list');

    // Update date and time
    setInterval(() => {
        const now = new Date();
        dateElement.textContent = now.toDateString();
        timeElement.textContent = now.toLocaleTimeString();
    }, 1000);

    // Add a message
    addMessageButton.addEventListener('click', () => {
        const messageText = messageInput.value.trim();
        if (messageText) {
            const listItem = document.createElement('li');
            listItem.textContent = messageText;
            messageList.appendChild(listItem);
            messageInput.value = '';
        }
    });
});
