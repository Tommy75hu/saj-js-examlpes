let name = 'Tomi';

console.log(name + "'s apples");
console.log('Hello world')

$('h1').text('We are having a 10 min break')
$('p').html('Stay at home coding camp, Likes:<strong>13</strong>');

$('strong').css('background', 'lime');
$('h2').toggleClass('blue');


$('ul').append('<li>My name is ' + name + '</li>');

$('#add').click(() => {
    $('ul').append('<li>My name is ' + name + '</li>');
});

$('#remove').click(() => {
    $('li:last-child').remove();
});

let age=2;

console.log('Starting the if');

if (age < 18) {
console.log('Not old enough to drink');
} else {
console.log('Old enozgh to drink vodka');
}

console.log('Thisis after the if');

for (let i = 0; i < 100; i = i + 1) {
console.log(i);
}





// This is a java script comment

/* This is a 
multiline js comment
*/

