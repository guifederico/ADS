function fat(numero) {
	let prod = 1;
	let i = 0;

	while (i < numero) {
		i = i + 1;
		prod *= i;
	}
	return prod;
}
console.log(fat(6));