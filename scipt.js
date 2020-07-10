let ar=["pysics","gambling","bomb","axis","restrict","frustrate","amidst","phenomena","bribe","assumption","asymptote","analysis","chuckle","controversial","establish","gossip","influence","petrified","shortage","stunning","obsession","avaricious","dearth","imperturbability","penchant","ion"]
let word="";
let randomindex;
let letter=document.getElementById('int2');
let audio = new Audio('erro.mp3');
let test = false;
let letters = [];
let stars ;
let LINK;
let photo=["url('1.jpg')","url('2.jpg')","url('3.jpg')","url('4.jpg')","url('5.jpg')","url('6.jpg')","url('7.jpg')","url('8.jpg')","url('9.jpg')","url('10.jpg')","url('11.jpg')","url('12.jpg')","url('13.jpg')","url('14.jpg')","url('15.jpg')","url('16.jpg')",]
let randomPhoto;



function ChL() {
	console.log(letter.value);
	letters.push(letter.value);

	let temp2="";
	test = false;
	for (let i=0; i<word.length; i=i+1){
		let char = word[i]
		if (letters.indexOf(char) != -1) {
			temp2=temp2+char;
			int2=""
		}else{
			temp2=temp2+"*";
		}
		console.log(word[i])
		if (letter.value==word[i]) {test=true}
		document.getElementById('int2').value="";

	}
	if (test==false) {
		audio.play();
		alert("There isn't such a letter in the word, press OK to continue ") ;
		document.getElementById('span').innerHTML=document.getElementById('span').innerHTML-1;
	}
	

	document.getElementById('int1').value=temp2;
	if (!(document.getElementById('int1').value.includes("*"))) {
		appear()
	}

	if (document.getElementById('span').innerHTML==0) {
		document.getElementById('bt2').style.display="none"
	}


	
}

function Start() {
	randomindex=Math.floor(Math.random()*25)
	randomPhoto=Math.floor(Math.random()*16)
	document.body.style.backgroundImage = photo[randomPhoto];
	word=ar[randomindex]
	LINK = "https://www.vocabulary.com/dictionary/" + word;
	document.getElementById('bt3').setAttribute('href', LINK)
	document.getElementById('span').innerHTML=8
	console.log(LINK)
	let temp="";
	for (let i = 0; i < word.length; i++) {
		temp=temp+"*";
	}
	document.getElementById('int1').value=temp;
}

function appear() {
	document.getElementById("bt3").style.display='block';
	
}

let input = document.getElementById("int2");
input.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		console.log("int2")
		event.preventDefault();
		document.getElementById("bt2").click();
	}
});



