import * as mathService from '../../services/math.service';

describe('Math Service', () => {
  describe('add()', () => {
    it('adds two positive numbers', () => {
      expect(mathService.add(3, 4)).toBe(7);
    });

    it('adds a positive and a negative number', () => {
      expect(mathService.add(10, -3)).toBe(7);
    });

    it('adds two negative numbers', () => {
      expect(mathService.add(-5, -2)).toBe(-7);
    });

    it('adds zero to a number', () => {
      expect(mathService.add(0, 5)).toBe(5);
      expect(mathService.add(5, 0)).toBe(5);
    });
  });

  describe('subtract()', () => {
    it('subtracts two numbers', () => {
      expect(mathService.subtract(10, 3)).toBe(7);
    });

    it('subtracts a larger number from a smaller one', () => {
      expect(mathService.subtract(3, 10)).toBe(-7);
    });

    it('subtracts zero from a number', () => {
      expect(mathService.subtract(5, 0)).toBe(5);
      expect(mathService.subtract(0, 5)).toBe(-5);
    });

    it('subtracts a negative number', () => {
      expect(mathService.subtract(5, -3)).toBe(8);
      expect(mathService.subtract(-5, 3)).toBe(-8);
    });

    it('subtracts two negative numbers', () => {
      expect(mathService.subtract(-5, -2)).toBe(-3);
    });

    it('subtracts a number from itself', () => {
      expect(mathService.subtract(5, 5)).toBe(0);
    });
  });

  describe('multiply()', () => {
    it('multiplies two numbers', () => {
      expect(mathService.multiply(4, 3)).toBe(12);
    });

    it('multiplies a number by zero', () => {
      expect(mathService.multiply(5, 0)).toBe(0);
      expect(mathService.multiply(0, 5)).toBe(0);
    });

    it('multiplies two negative numbers', () => {
      expect(mathService.multiply(-2, -3)).toBe(6);
    });

    it('multiplies a positive and a negative number', () => {
      expect(mathService.multiply(5, -2)).toBe(-10);
      expect(mathService.multiply(-5, 2)).toBe(-10);
    });

    it('multiplies by one', () => {
      expect(mathService.multiply(5, 1)).toBe(5);
      expect(mathService.multiply(1, 5)).toBe(5);
    });

    it('multiplies two large numbers', () => {
      expect(mathService.multiply(1000, 2000)).toBe(2000000);
    });
  });

  describe('divide()', () => {
    it('divides two numbers', () => {
      expect(mathService.divide(10, 2)).toBe(5);
    });

    it('throws error when dividing by zero', () => {
      expect(() => mathService.divide(10, 0)).toThrow('Cannot divide by zero');
    });

    it('divides a number by itself', () => {
      expect(mathService.divide(5, 5)).toBe(1);
    });

    it('divides a negative number by a positive number', () => {
      expect(mathService.divide(-10, 2)).toBe(-5);
    });

    it('divides a positive number by a negative number', () => {
      expect(mathService.divide(10, -2)).toBe(-5);
    });

    it('divides two negative numbers', () => {
      expect(mathService.divide(-10, -2)).toBe(5);
    });

    it('divides by one', () => {
      expect(mathService.divide(5, 1)).toBe(5);
      expect(mathService.divide(1, 5)).toBe(0.2);
    });
  });


  describe('power()', () => {
    it('raises a number to a positive power', () => {
      expect(mathService.power(2, 3)).toBe(8);
    });

    it('raises a number to the power of zero', () => {
      expect(mathService.power(5, 0)).toBe(1);
      expect(mathService.power(0, 0)).toBe(1); // 0^0 is often defined as 1
    }); 

    it('raises a number to a negative power', () => {
      expect(mathService.power(2, -2)).toBe(0.25);
      expect(mathService.power(5, -1)).toBe(0.2);
    });

    it('raises zero to a positive power', () => {
      expect(mathService.power(0, 3)).toBe(0);
    });

    it('raises a negative number to an even power', () => {
      expect(mathService.power(-2, 2)).toBe(4);
    });

    it('raises a negative number to an odd power', () => {
      expect(mathService.power(-2, 3)).toBe(-8);
    });
  });
});
