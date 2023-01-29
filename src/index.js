module.exports = function towelSort (matrix) {
    if (!matrix) return []
    let t = [];
    matrix.forEach((i, j) => j % 2 == 0 ? t = t.concat(i) : t = t.concat(i.reverse()))
    return t
}

