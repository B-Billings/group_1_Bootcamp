(()=>{
	const button = document.querySelector("#button");
	const menu = document.querySelector("#menucontent");

	function compactmenu() {
		//console.log("burger time!")
		button.classList.toggle("expanded");
		menu.classList.toggle("slideToggle");
	}


	button.addEventListener("click", compactmenu);
})();

(()=>{
	const TheList = document.querySelector("#teammembers"),
			pictures = document.querySelector(".personpictures"),
			person = document.querySelector(".textarea h2"),
			bio = document.querySelector("#biotext");

	const introContent = [
    [`Forest City Designs`, `Founded in 2022 during orientation week`],
		[`Brody Billings`, `Hello, My name is Brody Billings. Some of my hobies include Mountain Biking, Formula 1 and video games. Preey simple`],
		[`Roy Chan`, `Roy Bio`],
		[`Laura Albarracin`, `Laura Bio`],
		[`Leslie Deshaw`, `Leslie Bio`]
	];

	function slideBanner(event) {
		if (event.target.className.includes("person")) {
			let multiplier = event.target.dataset.offset, offsetWidth = 503;

			pictures.style.right = `${multiplier * offsetWidth}px`;

			console.log("Image Changed");
		}
	}

	function personbio(name, text) {
		person.textContent = name;
		bio.textContent = text;
	}

	function changeText(event) {
		personbio(introContent[event.target.dataset.offset][0],
						introContent[event.target.dataset.offset][1]);
						console.log("Text Changed");
	}


	TheList.addEventListener("click", slideBanner);
	TheList.addEventListener("click", changeText);



})();
