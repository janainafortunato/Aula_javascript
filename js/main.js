function clicou(){
	//alert("Obrigado por clicar");
	document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
}

function redirecionar()
{
	//window.open("https://github.com/janainafortunato/Aula_javascript");
	window.location.href = "https://pt-br.facebook.com/";
}

function troca(elemento){

	//document.getElementById("mousemove").innerHTML = "Obrigado por passar o mause";
	//alert("trocar texto");
	elemento.innerHTML = "Obrigado por passar o mouser";
}

function voltar(elemento){
	//document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
	elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
	alert("pagina carregada");
}

function funcaoChange(elemento){
	console.log(elemento.value);
}




/*function soma(n1, n2){
	return n1 + n2;
}*/

/*function setReplace(frase, nome, novo_nome){
	return frase.replace(nome, novo_nome)
}
		validar = false

function validadeIdade(idade){
	var validar;

	if(idade >= 18){

		validar = true

	}else{

	}

	return validar;
}

var idade = prompt("Qual sua idade");
console.log(validadeIdade(idade));

//alert(setReplace("vai Japão", "Japão", "Brasil"));
//alert(soma(5, 10));*/


/*var d = new Date();
alert(d.getHours());
alert(d.getDay());
alert(d.getMinutes() + 1);*/


/*var count;
for(count=0; count<=5; count++){
	alert(count);
};*/



/*var count = 0;
while(count <= 5){
	console.log(count);
	alert(count);
	count ++;
};*/


/*var idade = prompt("Qual sua idade");
if(idade>= 18){
	alert("maior de idade");
}else{
	alert("menor de idade");
}*/


/*var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
console.log(frutas);
alert(frutas[1].nome);*/


/*var fruta = {nome: "maça", cor: "vermelha"}
console.log(fruta.nome);
alert(fruta.cor);*/
//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));



/*var nome = "Janaina Fortunato";
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos ");

//alert(idade + idade2);
console.log(nome);
console.log(n1 * idade2);
console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));*/