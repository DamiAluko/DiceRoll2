// function rollDice() {
//   // Get the input value dynamically
//   const input = Number(document.getElementById("userInput").value);
//   const image = document.getElementById("diceImages");

//   // Validate and display the appropriate image
//   switch (input) {
//     case 1:
//       image.innerHTML = '<img src="./dice_imgs/dice1.jpg" alt="Dice 1">';
//       break;
//     case 2:
//       image.innerHTML = '<img src="./dice_imgs/dice2.jpg" alt="Dice 2">';
//       break;
//     case 3:
//       image.innerHTML = '<img src="./dice_imgs/dice3.jpg" alt="Dice 3">';
//       break;
//     case 4:
//       image.innerHTML = '<img src="./dice_imgs/dice4.jpg" alt="Dice 4">';
//       break;
//     case 5:
//       image.innerHTML = '<img src="./dice_imgs/dice5.jpg" alt="Dice 5">';
//       break;
//     case 6:
//       image.innerHTML = '<img src="./dice_imgs/dice6.jpg" alt="Dice 6">';
//       break;
//     default:
//       image.innerHTML = "Invalid dice number. Please enter a number between 1 and 6.";
//   }
// }

function rollDice(){
  const noOfDice = Number(document.getElementById("userInput").value);
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");

  const values = [];
  const images = [];

  for(let i = 0; i < noOfDice; i++){
    const randomNum = Math.floor((Math.random()*6)+1);
    values.push(randomNum);
    images.push(`<img src="./dice_imgs/dice${randomNum}.jpg" alt="dice${randomNum}">`)
  }
  diceResult.textContent = "Dice " + values.join(', ')
  diceImages.innerHTML = images.join('');
}
