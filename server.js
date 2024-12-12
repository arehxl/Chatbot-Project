const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.statistic('public'));

// Chatbot endpoint

app.post('/chatbot', (req, res) => {
    const userMessage = req.body.message;
    const botReply = getBotReply(userMessage);
    res.json({ reply: botReply});
});

function getBotReply(message) {
    if (message.include('hello')) return 'Hello there! How can I help you?';
    return 'Sorry, I am still learning';
}

app.listen(port, () => {
    console.log('Sever running at http://localhost:${port}');
});