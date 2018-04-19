console.log('js czech');

$(document).ready(onReady);

function onReady() {
    console.log('jquery czech');
    $.ajax({
        type: 'GET',
        url: '/monsters' 
    })
        .then(function (response) {
            console.log(response); //alright nothing i put in this ajax will run, what am i missin here
            for (let i=0; i<response.length; i++){
                console.log(response[i]);
                $('#monstersList').append(`<li> ${response[i]} </li>`); //hmmm brain forgot how to pull elements fhdajkfa
            } //whelp this isn't doing anything (_yet_)
        });
}
