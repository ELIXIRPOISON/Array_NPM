Array.prototype.sum = function () {
    return this.reduce((acc, num) => acc + num, 0);
};

Array.prototype.clearDuplicates = function () {
    return [...new Set(this)];
};

Array.prototype.average = function () {
    return this.length === 0 ? 0 : this.sum() 
};

Array.prototype.maxValue = function () {
    return Math.max(...this);
};

Array.prototype.minValue = function () {
    return Math.min(...this);
};

Array.prototype.multiplyBy = function (factor) {
    return this.map(num => num * factor);
};

Array.prototype.filterByCondition = function (callback) {
    return this.filter(callback);
};

Array.prototype.removeElement = function (element) {
    return this.filter(el => el !== element);
};

Array.prototype.flatten = function () {
    return this.reduce((flat, toFlatten) =>
        flat.concat(Array.isArray(toFlatten) ? toFlatten.flatten() : toFlatten), []);
};

Array.prototype.partition = function (callback) {
    return this.reduce((acc, item) => {
        acc[callback(item) ? 0 : 1].push(item);
        return acc;
    }, [[], []]);
};
