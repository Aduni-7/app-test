import request from 'supertest';
import app from './app.js';

describe('API Endpoints', () => {
  describe('GET /', () => {
    it('should return a welcome message', async () => {
      const response = await request(app).get('/');
      expect(response.status).toBe(200);
      expect(response.body.message).toBe('Welcome to the API');
    });
  });

  describe('GET /health', () => {
    it('should return a health check response', async () => {
      const response = await request(app).get('/health');
      expect(response.status).toBe(200);
      expect(response.body.status).toBe('OK');
      expect(response.body.message).toBe('The server is healthy');
    });
  });

  describe('GET /api/geoai/analysis', () => {
    it('should return an analysis response', async () => {
      const response = await request(app).get('/api/geoai/analysis');
      expect(response.status).toBe(200);
      expect(response.body.message).toBe('Analysis endpoint is working');
    });
  });

  describe('GET /api/geoai', () => {
    it('should return a geoai endpoint response', async () => {
      const response = await request(app).get('/api/geoai');
      expect(response.status).toBe(200);
      expect(response.body.status).toBe('OK');
      expect(response.body.message).toBe('GeoAI engine is online');
    });
  });
});
