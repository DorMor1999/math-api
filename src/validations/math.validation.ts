// src/validations/math.validation.ts
import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const schemaOpearnds = Joi.object({
  a: Joi.number().strict().required().messages({
    'number.base': '"a" must be a number (not a string)',
    'any.required': '"a" is required',
  }),
  b: Joi.number().strict().required().messages({
    'number.base': '"b" must be a number (not a string)',
    'any.required': '"b" is required',
  }),
});

const schemaPower = Joi.object({
  base: Joi.number().strict().required().messages({
    'number.base': '"base" must be a number (not a string)',
    'any.required': '"base" is required',
  }),
  exponent: Joi.number().strict().required().messages({
    'number.base': '"exponent" must be a number (not a string)',
    'any.required': '"exponent" is required',
  }),
});

export default function validate(_type: string) {
  return (req: Request, _res: Response, next: NextFunction) => {
    let schema;
    if (_type === 'power') {
      schema = schemaPower;
    } else {
      schema = schemaOpearnds;
    }
    const { error } = schema.validate(req.body, {
      convert: false, // 🚫 no string-to-number conversion
    });

    if (error) {
      return next(error);
    }

    next();
  };
}
