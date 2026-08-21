import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// 1. MAIN ROUTER
const mainRouter = express.Router();

mainRouter.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the API' });
});

mainRouter.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'The server is healthy' 
  });
});

// 2. GEOAI ROUTER
const geoAiRouter = express.Router();

// CRITICAL FIX: Specific sub-paths MUST be declared BEFORE the root '/' path
geoAiRouter.get('/analysis', (req, res) => {
  res.status(200).json({ 
    message: 'Analysis endpoint is working' 
  });
});

geoAiRouter.get('/', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'GeoAI engine is online' 
  });
});

// 3. MOUNT ROUTERS
app.use('/', mainRouter);
app.use('/api/geoai', geoAiRouter); 

export default app;
