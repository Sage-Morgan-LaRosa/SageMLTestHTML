const { Anchor, TAU } = Zdog;

(() => {
	const bounceOut = (t) => {
		const a = 4.0 / 11.0;
		const b = 8.0 / 11.0;
		const c = 9.0 / 10.0;
		const ca = 4356.0 / 361.0;
		const cb = 35442.0 / 1805.0;
		const cc = 16061.0 / 1805.0;
		const t2 = t * t;
		return t < a
			? 7.5625 * t2
			: t < b
			? 9.075 * t2 - 9.9 * t + 3.4
			: t < c
			? ca * t2 - cb * t + cc
			: 10.8 * t * t - 20.52 * t + 10.72;
	};

	const root = new Anchor();

	const element = document.querySelector("canvas");
	const context = element.getContext("2d");
	const { width, height } = element;
	const zoom = 4.8;

	context.lineJoin = "round";
	context.lineCap = "round";

	const render = () => {
		context.clearRect(0, 0, width, height);
		context.save();
		context.translate(width / 2, height / 2);
		context.scale(zoom, zoom);
		root.renderGraphCanvas(context);
		context.restore();
	};

	root.rotate.y = 0.2;
	root.rotate.x = 0.12;
	root.translate.y = 12;

	const input = document.querySelector('input[type="range"]');

	let state = "wait";
	let frame = null;
	let offset = 0;
	let ticker = 0;
	let cycle = 40;
	const getCycle = (offset) => 40 + 40 * Math.abs(offset);
	const angle = TAU / 9;

	const update = (value) => {
		root.updateGraph();
		render();
	};

	const reset = () => {
		ticker++;
		if (ticker >= cycle) {
			ticker = 0;
			input.value = 0;
			update(0);

			state = "wait";
			cancelAnimationFrame(frame);
		} else {
			const value = (1 - bounceOut(ticker / cycle)) * offset;
			input.value = value;
			update(value);

			frame = requestAnimationFrame(reset);
		}
	};

	function handleInput(e) {
		if (state === "reset") {
			state = "wait";
			cancelAnimationFrame(frame);

			ticker = 0;
		}

		const value = parseFloat(e.target.value);
		update(value);
	}

	function handleReset(e) {
		if (state === "reset") return;

		const value = parseFloat(e.target.value);

		if (value === 0) return;

		offset = value;
		cycle = getCycle(offset);

		state = "reset";
		frame = requestAnimationFrame(reset);
	}

	input.removeAttribute("disabled");
	input.addEventListener("input", handleInput);
	input.addEventListener("pointerup", handleReset);
	input.addEventListener("blur", handleReset);
})();
