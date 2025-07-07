/**
 * Converts a string to camelCase format.
 *
 * Handles various input formats including spaces, underscores, hyphens, and mixed casing.
 * - Splits camelCase words, unifies separators, and removes special characters except for separators.
 * - Maintains acronyms (all-uppercase words) as lowercase in the result.
 * - Throws an error if the input is invalid, null, undefined, empty, or numeric.
 *
 * @function toCamelCase
 * @param {string} str - The input string to convert to camelCase.
 * @throws {Error} If the input is not a non-empty string or is numeric.
 * @throws {Error} If the input does not contain at least one valid word after cleaning.
 * @returns {string} The camelCase formatted string.
 *
 * @example
 * toCamelCase('first name'); // returns 'firstName'
 * toCamelCase('user_id'); // returns 'userId'
 * toCamelCase('SCREEN_NAME'); // returns 'screenName'
 * toCamelCase('mobile-number'); // returns 'mobileNumber'
 */

/**
 * Converts a string to dot.case format.
 *
 * Handles various input formats including spaces, underscores, hyphens, and mixed casing.
 * - Splits camelCase words, unifies separators, and removes special characters except for separators.
 * - Maintains acronyms (all-uppercase words) as lowercase in the result.
 * - Throws an error if the input is invalid, null, undefined, empty, or numeric.
 *
 * @function toDotCase
 * @param {string} str - The input string to convert to dot.case.
 * @throws {Error} If the input is not a non-empty string or is numeric.
 * @throws {Error} If the input does not contain at least one valid word after cleaning.
 * @returns {string} The dot.case formatted string.
 *
 * @example
 * toDotCase('first name'); // returns 'first.name'
 * toDotCase('user_id'); // returns 'user.id'
 * toDotCase('SCREEN_NAME'); // returns 'screen.name'
 * toDotCase('mobile-number'); // returns 'mobile.number'
 */
/* 
 * Converts a string to camelCase.
 * Handles spaces, underscores, hyphens, and mixed casing.
 * Throws error for invalid, null, undefined, or numeric inputs.
 * Removes non-letter/number characters except for separators.
 * Maintains acronyms (all uppercase words) as lowercase.
 * @param {string} str
 * @returns {string}
 */

function toCamelCase(str) {
    if (typeof str !== 'string' || str.trim() === '' || str === null || str === undefined) {
        throw new Error('Input must be a non-empty string');
    }
    if (!isNaN(str)) {
        throw new Error('Input must not be numeric');
    }

    // Replace all non-alphanumeric separators with a space
    const cleaned = str
        .replace(/([a-z])([A-Z])/g, '$1 $2') // split camelCase
        .replace(/[_\-\s]+/g, ' ')           // unify separators
        .replace(/[^a-zA-Z0-9 ]+/g, '');     // remove special chars

    const words = cleaned.trim().split(' ').filter(Boolean);

    if (words.length === 0) {
        throw new Error('Input must contain at least one valid word');
    }

    return words
        .map((word, idx) => {
            // If word is all uppercase (acronym), lowercase it
            const lower = /^[A-Z0-9]+$/.test(word) ? word.toLowerCase() : word;
            if (idx === 0) {
                return lower.charAt(0).toLowerCase() + lower.slice(1);
            }
            return lower.charAt(0).toUpperCase() + lower.slice(1);
        })
        .join('');
}

// Example usage:
// console.log(toCamelCase('first name')); // firstName
// console.log(toCamelCase('user_id')); // userId
// console.log(toCamelCase('SCREEN_NAME')); // screenName
// console.log(toCamelCase('mobile-number')); // mobileNumber

/**
 * Converts a string to dot.case.
 * Handles spaces, underscores, hyphens, and mixed casing.
 * Throws error for invalid, null, undefined, or numeric inputs.
 * Removes non-letter/number characters except for separators.
 * Maintains acronyms (all uppercase words) as lowercase.
 * @param {string} str
 * @returns {string}
 */
function toDotCase(str) {
    if (typeof str !== 'string' || str.trim() === '' || str === null || str === undefined) {
        throw new Error('Input must be a non-empty string');
    }
    if (!isNaN(str)) {
        throw new Error('Input must not be numeric');
    }

    // Replace all non-alphanumeric separators with a space
    const cleaned = str
        .replace(/([a-z])([A-Z])/g, '$1 $2') // split camelCase
        .replace(/[_\-\s]+/g, ' ')           // unify separators
        .replace(/[^a-zA-Z0-9 ]+/g, '');     // remove special chars

    const words = cleaned.trim().split(' ').filter(Boolean);

    if (words.length === 0) {
        throw new Error('Input must contain at least one valid word');
    }

    return words
        .map(word => /^[A-Z0-9]+$/.test(word) ? word.toLowerCase() : word.toLowerCase())
        .join('.');
}

// Example usage:
// console.log(toDotCase('first name')); // first.name
// console.log(toDotCase('user_id')); // user.id
// console.log(toDotCase('SCREEN_NAME')); // screen.name
// console.log(toDotCase('mobile-number')); // mobile.number    

