$(document).ready(onReady)

console.log('🟥 🟦 🟩 🟨');


let redCount = 1
let blueCount = 1
let greenCount = 1
let yellowCount = 1

function onReady() {
//  registering event holder
    $('#red-btn').on('click', appendRedBlock)
//  registering event holder
    $('#blue-btn').on('click', appendBlueBlock)
//  registering event holder
    $('#green-btn').on('click', appendGreenBlock)
//  registering event holder
    $('#yellow-btn').on('click', appendYellowBlock)


//  Adding Red Block
function appendRedBlock() {
    $('#blockContainer').append('<div class="block red-fill"></div>')
    redCount ++
    $('#red-count').empty()
    $('#red-count').append(redCount)
    // Other Methods
    // otherCount()
}

//  Adding Blue Block
function appendBlueBlock() {
    $('#blockContainer').append('<div class="block blue-fill"></div>')
    blueCount ++
    $('#blue-count').empty()
    $('#blue-count').append(blueCount)
}

//  Adding Green Block
function appendGreenBlock() {
    $('#blockContainer').append('<div class="block green-fill"></div>')
    greenCount ++
    $('#green-count').empty()
    $('#green-count').append(greenCount)
}

// Adding Yellow Block
function appendYellowBlock() {
    $('#blockContainer').append('<div class="block yellow-fill"></div>')
    yellowCount ++
    $('#yellow-count').empty()
    $('#yellow-count').append(yellowCount)
}


// $('#red-btn').on('click','#red-count', otherCount)

// let thing = $(`block`)

// function otherCount() {
//     console.log('block');
// }

// //  Removing Red Block
//     $('#blockContainer').on('click','.red-fill', removeRed);
// //  Removing Blue Block
//     $('#blockContainer').on('click', '.blue-fill',removeBlue);
// //  Removing Green Block
//     $('#blockContainer').on('click', '.green-fill',removeGreen);
// //  Removing Yellow Block
//     $('#blockContainer').on('click', '.yellow-fill', removeYellow);
}

//  REMOVING OF BLOCKS
// function removeRed() {
//     $(this).remove()
// }

// function removeBlue() {
//     $(this).remove()
// }

// function removeGreen() {
//     $(this).remove()
// }

// function removeYellow() {
//     $(this).remove()
// }


