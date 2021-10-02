function generator() {
    var list = [],sum = 0;

    for (var i = 10; i > 1; i--) {
        var j = Math.floor(Math.random() * Math.floor(10))
        list.push(j);
        sum += j * i;      
    }

    var s = sum % 11;
    if (s < 2) {
        list.push(s);
    } else if (s >= 2) {
        list.push(11 - s);
    }

    return list.join('');
}