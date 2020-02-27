// Memoized Factorial code

import { factorialR } from './fact';
import memoize from './memoize';

export const memoFactorialR = memoize(factorialR);

export function memoFactorial(num: number) : any {
    var cachedResults : any = null;

    if (!cachedResults) {
        cachedResults = {};
    }

    if (!cachedResults[num]) {
        if (num === 0) {
            cachedResults[num] = 0;
        } else if (num === 1) {
            cachedResults[num] = 1;
        } else {
            cachedResults[num] =
                memoFactorial(num - 1) + memoFactorial(num - 2);
        }
    }
    return cachedResults[num];
}
