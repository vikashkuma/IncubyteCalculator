function add(numbers) {
    if (numbers === "") {
        return 0;
    }

    let delimiter = /[\n,]/; // Default delimiters are newline and comma

    if (numbers.startsWith("//")) {
        const delimiterLineEnd = numbers.indexOf('\n');
        const customDelimiter = numbers.substring(2, delimiterLineEnd);
        
        // If the custom delimiter is surrounded by brackets, remove them
        const delimiterPattern = customDelimiter.startsWith('[') && customDelimiter.endsWith(']')
            ? customDelimiter.slice(1, -1)
            : customDelimiter;

        // Escape special characters for the regex
        const escapedDelimiterPattern = delimiterPattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        
        delimiter = new RegExp(escapedDelimiterPattern, 'g');
        numbers = numbers.substring(delimiterLineEnd + 1);
    }

    const nums = numbers.split(delimiter).map(Number);

    // Check for negative numbers
    const negatives = nums.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(', ')}`);
    }

    return nums.reduce((acc, num) => acc + num, 0);
}

module.exports = add;
