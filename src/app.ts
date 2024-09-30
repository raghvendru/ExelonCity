import express, { Application } from 'express';
import connectDb from './config/database';
import cityRoutes from './routes/cityRoutes';
import bodyParser from 'body-parser';

const app: Application = express();
const PORT = 4000;

// Middleware(For parsing JSON request bodies)
app.use(bodyParser.json()); 


connectDb().then(() => {
  console.log('MongoDB connected successfully');

  app.listen(PORT, () => {
    console.log(`Server successfully listening on port ${PORT}...`);
  });
}).catch((error) => {
  console.error('Failed to connect to the database:', error);
});

// Routes
app.use('/api', cityRoutes); 

export default app;
