import { exampleUtility } from './example';

describe('exampleUtility', () => {
  it('trims and converts string to lowercase', () => {
    const input = '  HELLO WORLD  ';
    const expected = 'hello world';

    const result = exampleUtility(input);

    expect(result).toBe(expected);
  });

  it('handles empty string', () => {
    const input = '';
    const expected = '';

    const result = exampleUtility(input);

    expect(result).toBe(expected);
  });

  it('handles string with only whitespace', () => {
    const input = '   ';
    const expected = '';

    const result = exampleUtility(input);

    expect(result).toBe(expected);
  });
});


