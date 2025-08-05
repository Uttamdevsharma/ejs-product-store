const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')


//middleware for static file
app.use(express.static(path.join(process.cwd(),'public')))


// Setup EJS
app.set('view engine', 'ejs')
app.set('views', path.join(process.cwd(), 'views'))

// Sample products data
const products = [
    { id: 1, name: "Laptop", description: "This is an Apple laptop", price: 1000 },
    { id: 2, name: "Smartphone", description: "Samsung Galaxy smartphone with AMOLED display", price: 750 },
    { id: 3, name: "Headphones", description: "Noise-cancelling wireless headphones", price: 150 },
    { id: 4, name: "Keyboard", description: "Mechanical keyboard with RGB lights", price: 80 },
    { id: 5, name: "Monitor", description: "24-inch Full HD LED monitor", price: 200 },
    { id: 6, name: "Smartwatch", description: "Fitness tracking smartwatch with heart rate monitor", price: 120 },
    { id: 7, name: "Gaming Chair", description: "Ergonomic gaming chair with lumbar support", price: 300 },
    { id: 8, name: "Backpack", description: "Waterproof laptop backpack with USB charging port", price: 60 },
    { id: 9, name: "Webcam", description: "HD webcam with built-in microphone", price: 50 },
    { id: 10, name: "Bluetooth Speaker", description: "Portable Bluetooth speaker with deep bass", price: 90 }
];

// Home route
app.get('/', (req, res) => {
    res.render('index', { title: "Product List", products });
});

// Dynamic product route
app.get('/product/:id', (req, res) => {
    const { id } = req.params;
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    res.render('product', { title: "Product Detail", product });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
