// DOM elements
let space = document.querySelector('.space')
let player = document.querySelector('.defender')
let allInvaders = document.querySelector('.invaders')

// list of all invaders
let invaders = [].slice.call(document.querySelectorAll('.invader'))

// position of the invader
let invaderLeft = 0;

// position of the player
let playerLeft = 0;

// 1 moves right, -1 moves left
let invaderDirection = 1; 

// width of the screen
let screenWidth  = space.clientWidth - 60

// width of an invader
let invaderWidth = invaders[0].clientWidth * 3 - 20

// width of the player
let playerWidth = player.clientWidth


// move invader
function moveInvaders(){
	// move the invader depending on its direction
	if (invaderDirection == 1){
		invaderLeft += 10
	} else {
		invaderLeft -= 10
	}

	// update the invader position
	// allInvaders.style.left = invaderLeft + 'px'
	for (let i = 0; i < invaders.length; i++){
		invaders[i].style.left = invaderLeft + 'px'
	}

	// determine if the invader needs to turn around
	if (invaderLeft >= (screenWidth - invaderWidth - 60) || invaderLeft <= 0){
		invaderDirection *= -1
	}

	// keep moving the invader
	setTimeout(() => {moveInvaders()}, 75)
}

// function to set up keyboard event listener for the player
function initPlayer(){
	document.addEventListener('keydown', function(event){
		if (event.key == 'ArrowLeft'){
			movePlayer('left')
		} else if (event.key == 'ArrowRight'){
			movePlayer('right')
		}
	}, false)
}

// move the player defender, keydown event passes in the direction
function movePlayer(direction){
	if (direction == 'right'){
		if (playerLeft <= (screenWidth - playerWidth - 20)){
			playerLeft += 20
		} else {
			playerLeft == screenWidth - playerWidth - 20
		}
	} else if (direction == 'left'){
		if (playerLeft >= 20){
			playerLeft -= 20
		} else {
			playerLeft == 20
		}
	}
	player.style.left = playerLeft + 'px'
}

initPlayer()
moveInvaders()
