// Header Links : 
let link_icons = document.querySelector(".links");
console.log(link_icons);

link_icons.addEventListener("click",function(){
	
	this.classList.toggle("change");
})
 

//  scroll : 

let scroll_top = document.querySelector(".scroll-to-top");

window.onscroll = function () {
	if (window.scrollY > 600) {
		scroll_top.style.display = "block";
	} else {
		scroll_top.style.display = "none";
	}
};
scroll_top.onclick = function () {
	window.scrollTo({
		left: 0,
		top: 0,
		behavior: "smooth",
	});
};
