i=0
function run()
{
	terms=10
	scale = 5;
	a = Math.floor((Math.random() * scale) + 2);
	b = Math.floor((Math.random() * scale) + 2);
	c = Math.floor((Math.random() * scale) + 2);
	r = Math.floor((Math.random() * scale) + 2);
	eq = ""
	for (j = 1; j <= terms; j++){
       eq += String(a * (Math.pow(r, j)) + b) + "/" + String(c);
       eq += ", ";
	}
	ans = "<br>Nth term expression: (" + String(a) + " * " + String(r) + "ⁿ + " + String(b) + ")" + " / " + String(c) +"<br>"
	document.getElementById("container").innerHTML  += "<br><b>Q"+(i +1) + ".</b><div>"+ eq +"</div><button class='ans' id=\""+i+"b\" onclick=\"document.getElementById('"+i+"b').outerHTML ='<div>"+ans+"</div>'\">Ans</button>"
	i++
	}
