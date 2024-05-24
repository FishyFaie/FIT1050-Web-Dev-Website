// add classes for mobile navigation toggling
var CSbody = document.querySelector('body');
const CSnavbarMenu = document.querySelector('#cs-navigation');
const CShamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');

CShamburgerMenu.addEventListener('click', function () {
	CShamburgerMenu.classList.toggle('cs-active');
	CSnavbarMenu.classList.toggle('cs-active');
	CSbody.classList.toggle('cs-open');
	// run the function to check the aria-expanded value
	ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
	const csUL = document.querySelector('#cs-expanded');
	const csExpanded = csUL.getAttribute('aria-expanded');

	if (csExpanded === 'false') {
		csUL.setAttribute('aria-expanded', 'true');
	} else {
		csUL.setAttribute('aria-expanded', 'false');
	}
}

// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
for (const item of dropDowns) {
	const onClick = () => {
		item.classList.toggle('cs-active');
	};
	item.addEventListener('click', onClick);
}
                                



// document.addEventListener("DOMContentLoaded", function() {
//     const showMoreBtn = document.getElementById("readMore");
//     const hiddenText = document.getElementById("hidden-text");
// 	const originalText = document.getElementById("main-Text")
// 	const tempText = originalText.textContent;

//     showMoreBtn.addEventListener("click", function() {
//         if (hiddenText.classList.contains("cs-hidden-review")) {
//             hiddenText.classList.remove("cs-hidden-review");
// 			tempText.textContent = originalText;
//             showMoreBtn.textContent = "Show More";
//         } else {
//             hiddenText.classList.add("cs-hidden-review");
// 			let newText = originalText.replace("...", "");
// 			tempText.textContent = newText;
//             showMoreBtn.textContent = "Show Less"; 
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
	const reviewParagraph = document.getElementById("main-text");
	const originalText = reviewParagraph.textContent;
	const hiddenText = document.getElementById("hidden-text");
	const showMoreBtn = document.getElementById("readMore");

	let isButtonisRemoved = false;

	function toggleReadButton() {
		if (isButtonisRemoved) {
			reviewParagraph.textContent = originalText;
			hiddenText.style.display = "none";
			showMoreBtn.textContent = "Show More";
		} else {
			let newText = originalText.replace("...", "");
			reviewParagraph.textContent = newText;
			hiddenText.style.display = "inline";
			showMoreBtn.textContent = "Show Less"; 
		}
		isButtonisRemoved = !isButtonisRemoved;
	}


	showMoreBtn.addEventListener("click", toggleReadButton);
});