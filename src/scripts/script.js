let subSection1 = document.querySelector(".un");
let subSection2 = document.querySelector(".deux");
let subSection3 = document.querySelector(".trois");
let subSection4 = document.querySelector(".quatre");

let p1 = document.querySelector(".para1");
let p2 = document.querySelector(".para2");
let p3 = document.querySelector(".para3");
let p4 = document.querySelector(".para4");

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
let img4 = document.querySelector(".img4");

let imgplus1 = document.querySelector(".imgplus1");
let imgplus2 = document.querySelector(".imgplus2");
let imgplus3 = document.querySelector(".imgplus3");
let imgplus4 = document.querySelector(".imgplus4");

subSection1.addEventListener("click", () => {
	if (getComputedStyle(p1).display != "none") {
		p1.style.display = "none";
		img1.style.display = "none";
		imgplus1.style.display = "block";
	} else {
		p1.style.display = "block";
		img1.style.display = "block";
		imgplus1.style.display = "none";
	}
});

subSection2.addEventListener("click", () => {
	if (getComputedStyle(p2).display != "none") {
		p2.style.display = "none";
		img2.style.display = "none";
		imgplus2.style.display = "block";
	} else {
		p2.style.display = "block";
		img2.style.display = "block";
		imgplus2.style.display = "none";
	}
});

subSection3.addEventListener("click", () => {
	if (getComputedStyle(p3).display != "none") {
		p3.style.display = "none";
		img3.style.display = "none";
		imgplus3.style.display = "block";
	} else {
		p3.style.display = "block";
		img3.style.display = "block";
		imgplus3.style.display = "none";
	}
});

subSection4.addEventListener("click", () => {
	if (getComputedStyle(p4).display != "none") {
		p4.style.display = "none";
		img4.style.display = "none";
		imgplus4.style.display = "block";
	} else {
		p4.style.display = "block";
		img4.style.display = "block";
		imgplus4.style.display = "none";
	}
});
