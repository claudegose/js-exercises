

document.getElementById("run").addEventListener("click", () => {


    let inputID = document.getElementById("hero-id").value;


fetch("http://localhost:63342/js-exercises/_shared/api.json")
.then(res => res.json())
        .then(data => {

                let heroArray = data.heroes.find(findTheId => findTheId.id == inputID);
                let TemplateCopy = document.getElementById("tpl-hero").content.cloneNode(true);

                document.querySelector("#target").appendChild(TemplateCopy);
                document.querySelector("#target .name").innerHTML = heroArray.name;

                document.querySelector("#target .powers").innerHTML = heroArray.abilities;
                document.querySelector('#target .alter-ego').innerHTML = heroArray.alterEgo;


                console.log(heroArray)


        })


})
