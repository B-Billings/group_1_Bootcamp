
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
		[`Brody Billings`, `Hello, My name is Brody Billings. Some of my hobbies include Mountain Biking, Formula 1 and video games. Preey simple`],
		[`Roy Chan`, `Hello! I am Roy, I am a big fan of the digital world, learning to code and designing are always exciting to me  `],
		[`Laura Albarracin`, `Hello! I am Laura, I worked for 8 years in Business Communications, it helped me to realize that the world is turning digital, so, now I am learning to code`],
		[`Leslie DeShaw`, `Hello! I'm Leslie DeShaw. I'm a London based designer with a focus on bring fun back to design, using bright colours and unique fonts. My passion is in brand development and content creation.`]
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
