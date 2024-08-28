function sum(a, b) {
    return a + b;
}

test('сложение 1 + 2 равно 3', () => {
    expect(sum(1, 2)).toBe(3);
});