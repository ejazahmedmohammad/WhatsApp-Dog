
var r = false;
var st;
var sele="";
var conatctName=""
function f() {
		
		var c = document.querySelector(sele).textContent !== conatctName;

		
		if ( !r && c ){
			
			st = new Date(); 
			r=true;
		}
		if ( r && !c  ){
			
		r=false
		console.log(st);
		console.log(new Date());
		console.log("--------()---");
		}

}
	
function stalk() {
	console.log("stalking")
    var a = document.querySelector(sele).textContent ;
	console.log(a);
	var b = document.querySelector(sele).textContent !== conatctName;
	console.log(b);
	var amx =setInterval(f, 1000);
	
	return amx;
}



stalk();