const add = require('../calculator');

test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

test('should return the number itself for a single number', () => {
    expect(add("1")).toBe(1);
});

test('should return the sum for two numbers', () => {
    expect(add("1,5")).toBe(6);
});

test('should return the sum for multiple numbers', () => {
    expect(add("1,2,3,4,5")).toBe(15);
});

test('should handle new lines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
});

test('should handle custom delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//|\n1|2|3")).toBe(6);
    expect(add("//-\n1-2-3")).toBe(6);
    expect(add("//[***]\n1***2***3")).toBe(6);
});
