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
	g = gcd(gcd(a,b),c)
	a /= g
	b /= g
	c /= g
	for (j = 1; j <= terms; j++){
		red = reduce((a * Math.pow(r, j)) + b,c)
		fract = red[1] == 1 ? red[0] : red[0] + "/" + red[1]
		eq += fract +", ";
	}
	ans = "<br>Nth term expression: ("
	ans = a == 1 ? ans + r + "ⁿ + " + b + ")" : ans + a + " * " + r + "ⁿ + " + b + ")"
	ans = c == 1 ? ans.replace(/(\(|\))/g,"") : ans + " / " + c
	document.getElementById("container").innerHTML  += "<br><b>Q"+(i +1) + ".</b><div>"+ eq +"</div><button class='ans' id=\""+i+"b\" onclick=\"document.getElementById('"+i+"b').outerHTML ='<div>"+ans+"</div>'\">Ans</button>"
	i++
	}

function gcd(a,b){
	return b ? gcd(b, a%b) : a;
}


function reduce(numerator,denominator){
	numerator = Math.round(numerator)
	denominator = Math.round(denominator)
	g = gcd(numerator,denominator);
  return [numerator/g, denominator/g];
}
