prompt("Escribe un palindromo");
function palindromo (palabra) {
	var frase = palabra.replace (/\s/g,"");
	for (var i=0; i < frase.lenght; i++) {
		var x=frase[i].toLowerCase ();
		var y=frase [frase.lenght-(i+1)].toLowerCase ();
		if (x!==y) {
			return false;	
		}
		
		return  true;
	} 
						
} alert("Sí es un palindromo");


