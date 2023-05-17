document.getElementById('myButton').addEventListener('click', function(){
    var characterID = null;
    var page = ``;
    console.log("Hello World.");

})
















/* document.getElementById('myButton').addEventListener('click', search());
var characterId = null;
function search(){
    for(var i = 1; i < 827; i++){
        let page = `https://rickandmortyapi.com/api/character/${i}`;
        console.log(`id: ${i} page: ${page}`);
        fetch(page)
            .then(myPage => myPage.json())
            .then(data => {
                console.log("id: " + data.id + ".  name: " + data.name + ".  data: " + data);
            })
    }
} 
*/
/* document.getElementById('myButton').addEventListener('click', search);
function search(){
    var name = document.getElementById("characterName").value;
    for(var i = 1; i < 827; i++){
        let page = `https://rickandmortyapi.com/api/character/${i}`;
        fetch(page)
            .then(myPage => myPage.json())
            .then(data => {
                if(data.name == name){
                    console.log(data.name);
                }
            })
    }
} */