const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.post('/convert', (req, res) => {
    // Simplemente retornamos un archivo FSB de ejemplo preconvertido
    const fsbFilePath = path.join(__dirname, 'example.fsb');
    const fsbFileStream = fs.createReadStream(fsbFilePath);
    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Content-Disposition', 'attachment; filename="output.fsb"');
    fsbFileStream.pipe(res);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
