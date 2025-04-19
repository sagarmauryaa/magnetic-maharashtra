export function mapRange(x, a, b, c, d) {
	x = setBounds(x, a, b);
	return ((x - a) * (d - c)) / (b - a) + c;
}

function setBounds(value, lowerLimit, upperLimit) {
	if (value < lowerLimit) value = lowerLimit;
	if (value > upperLimit) value = upperLimit;
	return value;
}
