// Jogo da Velha

// Determinando jogadores
const player1 = "X";
const player2 = "O";

//  turnos e fim de jogo
let turn = player1;
let gamerOver = false;


// Função que mostrador que indica de quem é a vez, a menos que jogo tenha acabado.
const reloadIndicatorScreen = () => {
	if (gamerOver) return;
	if (turn==player1){
		const player = document.getElementById('imageindicator');
		player.setAttribute("src", "./img/inseticida.png");
	}else{
		const player = document.getElementById('imageindicator');
		player.setAttribute("src", "./img/pernelongo.png");
	}
}
reloadIndicatorScreen();


/* Função que insere a icone do jogador ao pixel clicado no tabuleiro. Se clicar no Pixel o Atributo turnOn que define de quem é a fez é passado para o outro jogador */
const pixelsAction = () => {
	const pixel = document.getElementsByClassName("pixel");
	for (key in pixel) {
	 pixel[key].addEventListener("click", function(){
	 	if (gamerOver)return;
	 	if (this.getElementsByTagName("img").length == 0){
	 		if (turn == player1){
	 			this.innerHTML = "<img src='./img/inseticida.png'>";
	 			this.setAttribute("turnOn", player1);
	 			turn = player2;
	 		}else{
	 			this.innerHTML = "<img src='./img/pernelongo.png'>";
	 			this.setAttribute("turnOn", player2);
	 			turn = player1;
			}
			reloadIndicatorScreen();
			whoIsWinner();
	 	}
	 });
	}
}
pixelsAction();

/* função para determinar quem ganhou o jogo */
async function whoIsWinner(){

	/* Variaveis que armazenam o jogador que jogou no pixel da vez */
	const a1 = document.getElementById("a1").getAttribute("turnOn");
	const a2 = document.getElementById("a2").getAttribute("turnOn");
	const a3 = document.getElementById("a3").getAttribute("turnOn");

	const b1 = document.getElementById("b1").getAttribute("turnOn");
	const b2 = document.getElementById("b2").getAttribute("turnOn");
	const b3 = document.getElementById("b3").getAttribute("turnOn");

	const c1 = document.getElementById("c1").getAttribute("turnOn");
	const c2 = document.getElementById("c2").getAttribute("turnOn");
	const c3 = document.getElementById("c3").getAttribute("turnOn");

	let winner ="";

	// Condições de vitoria 
	if (((a1==b1 && a1==c1)||(a1==a2 && a1==a3)||(a1==b2 && a1==c3)) && a1!=""){

		winner=a1;

	}else if (((b2==b1 && b2==b3)||(b2==a2 && b2==c2)||(b2==a3 && b2==c1)) && b2!=""){

		winner=b2;

	}else if (((c3==c2 && c3==c1)||(c3==a3 && c3==b3)) && c3!=""){

		winner=c3;

	}

	// se a variavel winner for diferente de vazio
	if (winner!=""){

		gamerOver=true;

		await sleep(50);

		alert("Game Over");
	}
}


function sleep(ms){

	return new Promise(resolve => setTimeout(resolve, ms));

}