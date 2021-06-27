

(() => {


    document.getElementById('run').addEventListener('click', function runner () {
        let inputID = document.getElementById("hero-id").value;

        fetch('http://localhost:63342/js-exercises/_shared/api.json')
            .then(response => {return response.json ()})
            .then(data => {
                let work = data.heroes.find(findHero=>findHero.id == inputID);
                let templateClone = document.getElementById("tpl-hero").content.cloneNode(true);

                document.getElementById('target').appendChild(templateClone);
                document.querySelector('#target .name').innerHTML = work.name;

                document.querySelector('#target .alter-ego').innerHTML = work.alterEgo;
                document.querySelector('#target .powers').innerHTML = work.abilities;

            })
    })


})();