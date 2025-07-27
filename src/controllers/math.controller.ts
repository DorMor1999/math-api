// src/controllers/math.controller.ts
import { Request, Response } from 'express';
import * as mathService from '../services/math.service';

export const add = (req: Request, res: Response) => {
  try {
    const { a, b } = req.body;
    const result = mathService.add(a, b);
    res.json({ result });
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
};

export const subtract = (req: Request, res: Response) => {
  try {
    const { a, b } = req.body;
    const result = mathService.subtract(a, b);
    res.json({ result });
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
};

export const multiply = (req: Request, res: Response) => {
  try {
    const { a, b } = req.body;
    const result = mathService.multiply(a, b);
    res.json({ result });
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
};

export const divide = (req: Request, res: Response) => {
  try {
    const { a, b } = req.body;
    const result = mathService.divide(a, b); // may throw if b == 0
    res.json({ result });
  } catch (error: any) {
    res.status(400).json({ error: error.message || 'Invalid operation' });
  }
};
