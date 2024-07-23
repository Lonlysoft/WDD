//let's keep this simple ;)
var frigid = document.getElementsByClassName("item");
var link = document.querySelector(".clickable");

//in the document's onload it would add the items the user's cart has, but not in here because there's no website to add them to start with... :P
function updateNumbers(){
	var totalText = document.querySelector(".shipping#itemAmount");
	let totalNum = 0;
	for(let i = 0; i < frigid.length; i++){
		totalNum += frigid[i].product__price.splice(1, frigid[i].product__price.length-1);
	}
	totalText.innerText = ""+totalNum;
}

function removeItem(index){
	if(frigid.length == 1){
		//slc css no javascript!? kkkkkkjkkjk
		frigid[0].innerText = "All Details Removed";
		frigid[0].style.backgroundColor = "#966";
		frigid[0].style.border = "none";
		frigid[0].style.textAlign = "center";
		frigid[0].style.color = "#fff";
		frigid[0].style.fontWeight = "600";
		frigid[0].style.display = "flex";
		frigid[0].style.alignItems = "center";
		frigid[0].style.justifyContent = "center";
		updateNumbers();
		return true;
	}
	frigid[index].remove();
	//updateNumbers();
}


//it's missing update the number. but I don't think they'll be possible here since the 