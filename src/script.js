/** @file All JavaScript code for this website. */
const form = document.querySelector("form");

if (!form) throw new ReferenceError("Could not find form");

form.addEventListener("submit", (event) => {
	event.preventDefault();
});
