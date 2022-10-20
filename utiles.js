function once(callback) {
    let value = false;
    return function (x) {
        if (value) {
            return;
        }
        console.log(value);
        value = true;
        callback(x);
    };
}
