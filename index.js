const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const categories = require('./data/categories.json');
const news = require('./data/news.json');

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('hellos server');
});

app.get('/categories-news', (req,res) => {
    res.send(categories);
});

app.get('/news', (req,res) => {
    res.send(news);
})

app.get('/news/:id', (req,res) => {
    const id = req.params.id;
    const selected_news = news.find( n => n._id === id);
    res.send(selected_news);
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if(id === '08') {
        res.send(news)
    } else {
        const selected_category = news.filter( n => n.category_id === id);
        res.send(selected_category);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})