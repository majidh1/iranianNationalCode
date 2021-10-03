function roundGenerator() {
	var list = [],
		sum = 0;
	var j = 10;
	for (var i = 10; i > 1; i--) {
		j = Math.floor(Math.random() * Math.floor(j < 2 ? 2 : j))
		list.push(j);
		sum += j * i;
	}

	var s = sum % 11;
	if (s < 2) {
		list.push(s);
	} else if (s >= 2) {
		list.push(11 - s);
	}
	if (list.filter(function(a) {
			return a != list[0];
		}).length == 0) {
		return roundGenerator();
	}
	return list.join('');
}
