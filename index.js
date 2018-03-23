Array.prototype.smoosh = function () {
    function smooshInternal(array) {
        var smooshed = [];
        for (var i = 0; i < array.length; i++) {
            if (array[i] instanceof Array) {
                smooshed.push.apply(smooshed, smooshInternal(array[i]));
            } else {
                smooshed.push(array[i]);
            }
        }
        return smooshed;
    }
    return smooshInternal(this);
};

Array.prototype.smooshMap = function (projectionFunction) {
    return this.smoosh().map(projectionFunction);
};

