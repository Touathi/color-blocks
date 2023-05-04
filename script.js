$(document).ready(onReady)

console.log('🟥 🟦 🟩 🟨');

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
}

//  Adding Blue Block
function appendBlueBlock() {
    $('#blockContainer').append('<div class="block blue-fill"></div>')
}

//  Adding Green Block
function appendGreenBlock() {
    $('#blockContainer').append('<div class="block green-fill"></div>')
}

// Adding Yellow Block
function appendYellowBlock() {
    $('#blockContainer').append('<div class="block yellow-fill"></div>')
}



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

// COUNTING CODE
$('#red-btn').on('click', '#red-count', addcount   )

let count = 1
function addcount() {
   
}