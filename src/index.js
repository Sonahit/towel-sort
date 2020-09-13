// You should implement your task here.
/**
 *
 * @param {number[][]} matrix
 */
module.exports = function towelSort(matrix) {
    if (!matrix || !Array.isArray(matrix) || !matrix.length) {
        return [];
    }
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = matrix[i].sort((a, b) => (i % 2 === 0 ? a - b : b - a));
    }
    return matrix.reduce((acc, a) => acc.concat(a), []);
};
