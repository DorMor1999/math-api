// src/validations/math.validation.ts
import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const schema = Joi.object({
  a: Joi.number().strict().required().messages({
    'number.base': '"a" must be a number (not a string)',
    'any.required': '"a" is required',
  }),
  b: Joi.number().strict().required().messages({
    'number.base': '"b" must be a number (not a string)',
    'any.required': '"b" is required',
  }),
});

export default function validate(_type: string) {
  return (req: Request, _res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, {
      convert: false, // 🚫 no string-to-number conversion
    });

    if (error) {
      return next(error);
    }

    next();
  };
}
