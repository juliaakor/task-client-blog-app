import { toPascalCaseWithSpaces } from '@lib/format/toPascalCaseWithSpaces';

describe('toPascalCaseWithSpaces', () => {
  test('should convert a dash-separated string to PascalCase with spaces', () => {
    const input = 'test-text-example';
    const output = toPascalCaseWithSpaces(input);

    expect(output).toBe('Test Text Example');
  });

  test('should convert an underscore-separated string to PascalCase with spaces', () => {
    const input = 'test_text_example';
    const output = toPascalCaseWithSpaces(input);

    expect(output).toBe('Test Text Example');
  });

  test('should handle mixed-case letters and convert to PascalCase with spaces', () => {
    const input = 'TeSt_TeXT_ExAmPle';
    const output = toPascalCaseWithSpaces(input);

    expect(output).toBe('Test Text Example');
  });

  test('should remove special characters and convert to PascalCase with spaces', () => {
    const input = 'test-text@#example!';
    const output = toPascalCaseWithSpaces(input);

    expect(output).toBe('Test Text Example');
  });

  test('should handle strings with multiple spaces or dashes and convert correctly', () => {
    const input = 'test--text__example';
    const output = toPascalCaseWithSpaces(input);

    expect(output).toBe('Test Text Example');
  });

  test('should handle strings with single words and capitalize them', () => {
    const input = 'test';
    const output = toPascalCaseWithSpaces(input);

    expect(output).toBe('Test');
  });

  test('should return an empty string when input is empty', () => {
    const input = '';
    const output = toPascalCaseWithSpaces(input);

    expect(output).toBe('');
  });

  test('should handle strings with leading and trailing spaces', () => {
    const input = '   test text   ';
    const output = toPascalCaseWithSpaces(input);

    expect(output).toBe('Test Text');
  });

  test('should handle strings with numbers and convert correctly', () => {
    const input = 'test-text-123-example';
    const output = toPascalCaseWithSpaces(input);

    expect(output).toBe('Test Text 123 Example');
  });
});
