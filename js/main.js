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
