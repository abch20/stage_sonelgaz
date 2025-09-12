import express, {json} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './src/routes/authRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;



app.use(cors());
app.use(json());



app.use('/api/auth', authRoutes);



app.get('/', (req, res) => {
    res.send('server is running...');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
