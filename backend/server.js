import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

const port = process.env.PORT || 5000;

connectDB()

const app = express()

app.get('/', (req, res) => {
    res.send('API is running...')
});

app.use('/api/products', productRoutes)

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on ${port}`))