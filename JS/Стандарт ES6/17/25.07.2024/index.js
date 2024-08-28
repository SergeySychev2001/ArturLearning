// module.js
export const size = 42;
export function multiply(a, b) {
    return a * b;
}

// main.js
import { size, multiply } from './module.js';