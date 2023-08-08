//your JS code here. If required.
let selection = document.getElementById("colorSelect");
document.getElementsByTagName("input")[0].onclick=function(){
		let ind=selection.selectedIndex;
	selection.remove(ind);
}