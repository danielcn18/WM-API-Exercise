var profile = document.getElementById('character-display');
var info = document.getElementById('character-info');

document.getElementById('myButton').addEventListener('click', function(){
    var characterID = null;
    var count = 0;
    var name = document.getElementById('characterName').value;
    for(let i = 1; i < 827; i++){
        if(characterID != null){
            continue;
        }
        var page = `https://rickandmortyapi.com/api/character/${i}`;
        fetch(page)
            .then(response => response.json())
            .then(data => {
                if(name == data.name){
                    if(count == 0){
                        characterID = data.id;
                        profile.style.border = "2px solid black";
                        profile.style.backgroundImage = `url(${data.image})`;
                        info.innerHTML = 
                        `<p>Name: ${data.name}<br>
                        Status: ${data.status}<br>
                        Species: ${data.species}<br>
                        Gender: ${data.gender}<br>
                        Origin Name: ${data.origin.name}<br></p>`;
                        count++;
                    }
                }
            })
            .catch(error => console.warn("Error: " + error))
    }
});