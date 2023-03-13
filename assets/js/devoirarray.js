function exercice1() {
	let fruits = ["Pomme", "Abricot", "Banane", "Poire", "Peche"];
	let suppr_last = fruits.pop();
	let add_first = fruits.unshift(suppr_last);	
	document.getElementById("exercice1Resultat").innerHTML = fruits;
	}

function exercice2() {
	let text = document.getElementById("texteExercice2").value;
    text = text.replace(/[.,\"]/g,"");
    text = text.replace(/\'/g," ");
    let mots = text.split(" ");
    let maj = text.toUpperCase();
    document.getElementById("exercice2Resultat").innerHTML = maj;
}

function exercice3() {
	let text = document.getElementById("texteExercice3").value;
	text = text.replace(/[.,\"]/g,"");
    text = text.replace(/\'/g," ");
	let mots = text.split(" ");
	let mots_filtre = mots.filter(mot => mot.length > 3);
	let result = mots_filtre.join(" ");
	document.getElementById("exercice3Resultat").innerHTML = result;
}

/* Version avec for :

function exercice3() {
	let text = document.getElementById("texteExercice3").value;
	text = text.replace(/[.,\"]/g,"");
	text = text.replace(/\'/g," ");
	let mots = text.split(" ");
	let resultat = "";
	for (let i = 0; i < mots.length; i++) {
  	let mot = mots[i];
 	 if (mot.length > 3) {
 	 	resultat += mot + " ";
  }
}
	document.getElementById("exercice3Resultat").innerHTML = resultat;
}

*/

function exercice4() {
	let text = document.getElementById("texteExercice4").value;
	text = text.replace(/[.,\"]/g,"");
    text = text.replace(/\'/g," ");
	let mots = text.split(" ");
	const tableau = [];
	mots.forEach(function(mot) {
		tableau.push(mot);
});
	document.getElementById("exercice4Resultat").innerHTML = tableau;
}
