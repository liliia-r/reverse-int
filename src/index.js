module.exports = function reverse(n) {
    let result = String(n)
        .split("")
        .filter((num) => num !== "-")
        .reverse()
        .filter((el) => n[0] !== "0")
        .join("");
    return result;
};
