function add(numbers) {
    if (numbers === "") {
        return 0;
    }

    const nums = numbers.split(/[\n,]/).map(Number);
    return nums.reduce((acc, num) => acc + num, 0);
}

module.exports = add;
