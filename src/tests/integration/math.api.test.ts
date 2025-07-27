import request from 'supertest';
import app from '../../app';

describe('Math API Integration Tests', () => {
  describe('POST /api/math/add', () => {
    it('should add two numbers', async () => {
      const res = await request(app).post('/api/math/add').send({ a: 5, b: 3 });

      expect(res.statusCode).toBe(200);
      expect(res.body.result).toBe(8);
    });

    it('should return 400 for missing parameters', async () => {
      const res = await request(app).post('/api/math/add').send({ a: 5 });
      expect(res.statusCode).toBe(400);
      expect(res.body.error).toMatch(/"b" is required/);
    });

    it('should return 400 if a or b are strings', async () => {
      const res = await request(app)
        .post('/api/math/add')
        .send({ a: '5', b: 3 });
      expect(res.statusCode).toBe(400);
      expect(res.body.error).toMatch(/must be a number/);
    });

    it('should return 400 for non-numeric inputs', async () => {
      const res = await request(app)
        .post('/api/math/add')
        .send({ a: 'five', b: 3 });
      expect(res.statusCode).toBe(400);
      expect(res.body.error).toMatch(/must be a number/);
    });

    it('should return 400 for empty request body', async () => {
      const res = await request(app).post('/api/math/add').send({});
      expect(res.statusCode).toBe(400);
      expect(res.body.error).toMatch(/"a" is required/);
    });
  });

  describe('POST /api/math/subtract', () => {
    it('should subtract two numbers', async () => {
      const res = await request(app)
        .post('/api/math/subtract')
        .send({ a: 10, b: 4 });

      expect(res.statusCode).toBe(200);
      expect(res.body.result).toBe(6);
    });

    it('should return 400 for missing parameters', async () => {
      const res = await request(app).post('/api/math/subtract').send({ a: 10 });
      expect(res.statusCode).toBe(400);
      expect(res.body.error).toMatch(/"b" is required/);
    });

    it('should return 400 if a or b are strings', async () => {
      const res = await request(app)
        .post('/api/math/subtract')
        .send({ a: '10', b: 4 });
      expect(res.statusCode).toBe(400);
      expect(res.body.error).toMatch(/must be a number/);
    });

    it('should return 400 for non-numeric inputs', async () => {
      const res = await request(app)
        .post('/api/math/subtract')
        .send({ a: 'ten', b: 4 });
      expect(res.statusCode).toBe(400);
      expect(res.body.error).toMatch(/must be a number/);
    });

    it('should return 400 for empty request body', async () => {
      const res = await request(app).post('/api/math/subtract').send({});
      expect(res.statusCode).toBe(400);
      expect(res.body.error).toMatch(/"a" is required/);
    });
  });

  describe('POST /api/math/multiply', () => {
    it('should multiply two numbers', async () => {
      const res = await request(app)
        .post('/api/math/multiply')
        .send({ a: 3, b: 4 });

      expect(res.statusCode).toBe(200);
      expect(res.body.result).toBe(12);
    });

    it('should return 400 for missing parameters', async () => {
      const res = await request(app).post('/api/math/multiply').send({ a: 3 });
      expect(res.statusCode).toBe(400);
      expect(res.body.error).toMatch(/"b" is required/);
    });

    it('should return 400 if a or b are strings', async () => {
      const res = await request(app)
        .post('/api/math/multiply')
        .send({ a: '3', b: 4 });
      expect(res.statusCode).toBe(400);
      expect(res.body.error).toMatch(/must be a number/);
    });

    it('should return 400 for non-numeric inputs', async () => {
      const res = await request(app)
        .post('/api/math/multiply')
        .send({ a: 'three', b: 4 });
      expect(res.statusCode).toBe(400);
      expect(res.body.error).toMatch(/must be a number/);
    });

    it('should return 400 for empty request body', async () => {
      const res = await request(app).post('/api/math/multiply').send({});
      expect(res.statusCode).toBe(400);
      expect(res.body.error).toMatch(/"a" is required/);
    });
  });

  describe('POST /api/math/divide', () => {
    it('should divide two numbers', async () => {
      const res = await request(app)
        .post('/api/math/divide')
        .send({ a: 10, b: 2 });

      expect(res.statusCode).toBe(200);
      expect(res.body.result).toBe(5);
    });

    it('should return 400 when dividing by zero', async () => {
      const res = await request(app)
        .post('/api/math/divide')
        .send({ a: 10, b: 0 });

      expect(res.statusCode).toBe(400);
      expect(res.body.error).toMatch(/Cannot divide by zero/);
    });

    it('should return 400 for missing parameters', async () => {
      const res = await request(app).post('/api/math/divide').send({ a: 10 });
      expect(res.statusCode).toBe(400);
      expect(res.body.error).toMatch(/"b" is required/);
    });

    it('should return 400 if a or b are strings', async () => {
      const res = await request(app)
        .post('/api/math/divide')
        .send({ a: '10', b: 2 });
      expect(res.statusCode).toBe(400);
      expect(res.body.error).toMatch(/must be a number/);
    });

    it('should return 400 for non-numeric inputs', async () => {
      const res = await request(app)
        .post('/api/math/divide')
        .send({ a: 'ten', b: 2 });
      expect(res.statusCode).toBe(400);
      expect(res.body.error).toMatch(/must be a number/);
    });
  });
});
