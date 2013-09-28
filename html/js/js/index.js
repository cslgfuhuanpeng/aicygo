function showLights(){
   handle =  setInterval("light();",500);
}
var handle;
var curIndex = 1;
function light (){
for (var i = 1; i <=10; i++) {
	var ele =document.getElementById("tries"+ i);
	ele.style.backgroundColor ="f1f1f1";
}

	var ele =document.getElementById("tries"+curIndex);
    ele.style.backgroundColor ="#FF0033";
    curIndex=(curIndex++)%10+1;
}
function divcli(index,flag){
	if (flag==5) {
		clearInterval(handle);
		for (var i = 1; i <=10; i++) {
	var ele =document.getElementById("tries"+ i);
	ele.style.backgroundColor ="f1f1f1";
}
		var ele =document.getElementById("tries"+index);
        ele.style.backgroundColor ="#FF0033";
        curIndex=index;
	}else{
		handle =  setInterval("light();",500);
}
}

