//your JS code here. If required.
let sq1 = document.getElementById("square1");
let sq2 = document.getElementById("square2");
let sq3 = document.getElementById("square3");

let sqarray = document.getElementsByClassName("square");


for(let i=0;i<3;i++){
	sqarray[i].addEventListener("mouseover",onFocus);
	sqarray[i].addEventListener("mouseout",onFocusOut);
}


function onFocus(e){
for(let i=0;i<3;i++){
	if(sqarray[i].id !== e.target.id){
		sqarray[i].style.backgroundColor = "#6F4E37";
	}
}
}

	
function onFocusOut(e){
for(let i=0;i<3;i++){
	sqarray[i].style.backgroundColor = "#E6E6FA"
}
}