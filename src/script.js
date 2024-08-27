/** @file All JavaScript code for this website. */
const form = document.querySelector("form");

if (!form) throw new ReferenceError("Could not find form");

const review = /** @type {HTMLParagraphElement} */ (
	document.querySelector("p#text")
);

if (!review) throw new ReferenceError("Could not find review");

const tabTwo = review.parentElement;
const tabThree = /** @type {HTMLDivElement} */ (document.querySelector('div[data-step="3"]'));

tabTwo?.querySelector("button[type='submit']")?.addEventListener("click", (event) => {
	const text = review.innerText;

	form.parentElement.style.display = "none";

	tabThree.style.display = "flex";

});

form.addEventListener("submit", (event) => {
	event.preventDefault();

	const text = form.querySelector("textarea")?.value || "";

	form.parentElement.style.display = "none";
	tabTwo.style.display = "flex";
	// eslint-disable-next-line unicorn/prefer-dom-node-text-content -- I want to conserve whitespace.
	review.innerText = text
		.trim()
		.replaceAll(/ +/g, " ")
		.replaceAll(/\s+/g, (match) => ((/^ +$/).test(match) ? " " : "\n"));
});
