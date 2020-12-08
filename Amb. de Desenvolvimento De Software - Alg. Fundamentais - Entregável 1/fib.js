
function fib(num) {
	if (num == 1) {
		return 0;
	}
	if (num == 2) {
		return 1;
	}
	else {
		return fib(num - 1) + fib(num - 2);
	}
}

for (var i = 1; i <= 10; i++) {
	console.log(fib(i));
}