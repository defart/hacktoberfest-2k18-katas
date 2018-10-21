import { simpleCalculator } from './simpleCalculator';


describe('simpleCalculator', () => {
  it('returns correct result when two integers and a valid operator is passed', () => {
  except(simpleCalculator(3, 4, *).toEqual(12);
  });

  it('returns correct result when two integers and a valid operator is passed', () => {
  except(simpleCalculator(30, 14, +).toEqual(44);
  // Valid operands are %, *, /, +, -
  });

  it('returns error message when two integers and an invalid operator is passed', () => {
  except(simpleCalculator(6, 2, #).toEqual("invalid Operator");
  });

  it('returns error message when two integers are not passed', () => {
  except(simpleCalculator(16, 5.9, %).toEqual("invalid or very few operands");
  });

});
