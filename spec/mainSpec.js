const { test } = QUnit;

QUnit.module('DOM', (hooks) => {
	hooks.beforeEach(() => {
		document.body.insertAdjacentHTML('afterbegin', getBodyContent());
	});

	hooks.afterEach(() => {
		document.body.removeChild(document.getElementById('wrapper'));
	});

	test('should have a string type of card subtitle content element', (assert) => {
		const cardSubtitleContent =
			document.querySelector('.card__subtitle').textContent;

		assert.equal(typeof cardSubtitleContent, 'string');
	});

	test("should have a title element that equals 'Join our community' word in first section element", (assert) => {
		const sectionEls = document.querySelectorAll('section');
		const firstSectionEl = sectionEls[0];
		const cardTitleEl = firstSectionEl.querySelector('.card__title');
		const cardTitle = cardTitleEl.textContent.trim();

		assert.equal(cardTitle, 'Join our community');
	});

	test('should have three section elements', (assert) => {
		const sectionEls = document.querySelectorAll('section');

		assert.strictEqual(sectionEls.length, 3);
	});

	test("should have a word 'Coding exercises' as one of why us points", (assert) => {
		const whyUsPointEls = document.querySelectorAll('.card__list li');

		const whyUsPoints = [];

		for (let i = 0; i < whyUsPointEls.length; i++) {
			const whyUsPoint = whyUsPointEls[i].textContent;
			whyUsPoints.push(whyUsPoint);
		}

		const isExpectedWordExist = whyUsPoints.includes('Coding exercises');

		assert.true(isExpectedWordExist);
	});
});
