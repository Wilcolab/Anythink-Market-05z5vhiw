/**
 * Converts a string to a URL-friendly slug:
 * 1. Converts to lowercase.
 * 2. Replaces spaces with hyphens.
 * 3. Handles camelCase by inserting hyphens before uppercase letters.
 * 4. Removes special characters except hyphens.
 * @param {string} str
 * @returns {string}
 */
function toSlug(str) {
    // Step 1: Insert hyphens before uppercase letters (camelCase handling)
    let result = str.replace(/([a-z])([A-Z])/g, '$1-$2');
    // Step 2: Convert to lowercase
    result = result.toLowerCase();
    // Step 3: Replace spaces with hyphens
    result = result.replace(/\s+/g, '-');
    // Step 4: Remove special characters except hyphens
    result = result.replace(/[^a-z0-9-]/g, '');
    // Step 5: Replace multiple hyphens with a single hyphen
    result = result.replace(/-+/g, '-');
    // Step 6: Trim hyphens from start and end
    result = result.replace(/^-+|-+$/g, '');
    return result;
}

// Test cases
const examples = [
    "Hello World",
    "camelCaseString",
    "This is a Test!",
    "Special@#Characters---Here",
    "  Leading and trailing   ",
    "already-slugified-string",
    "multiple   spaces",
    "snake_case_example"
];

examples.forEach(example => {
    console.log(`"${example}" -> "${toSlug(example)}"`);
});