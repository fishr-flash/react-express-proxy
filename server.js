const express = require('express');
const app = express();
const path = require('path');

// Статический сервер для файлов React
// app.use(express.static(path.join(__dirname, 'build')));

const { createProxyMiddleware } = require('http-proxy-middleware');

// Опции для отключения CORS
const corsOptions = {
    // Запретить доступ с других источников
    origin: false
};

app.use(
    createProxyMiddleware({
        target: 'http://localhost:3000', // Замените на URL вашего приложения React
        changeOrigin: true,
        ...corsOptions,
    })
);

app.post('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'path/to/your/index.html')); // Замените путь на соответствующий путь к вашему index.html
});
// Обработка маршрутов API или другой серверной логики

// Отправка index.html для всех остальных маршрутов
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});

app.get('/main', (req, res) =>{
    res.send({ arg: 'success request'})
})
