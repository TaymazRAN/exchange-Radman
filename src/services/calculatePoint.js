export function returnPointInPercent(data) {
	let point = 0;
	data.map((item, i) => {
		point += parseFloat(item.point);
		return point;
	});
	point = point / data.length;
	return Math.round(point * 10);
}

export function returnPointInPercentTable(data) {
	let point = 0;
	data.map((item, i) => {
		point += parseFloat(item.value);
		return point;
	});
	point = point / data.length;
	return Math.round(point * 10) + " %";
}

export function returnPointRounded(point) {
	return Math.round(point * 10)/10;
}