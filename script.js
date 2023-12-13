document.addEventListener("DOMContentLoaded", function () {
    var xhr = new XMLHttpRequest();
    xhr.open(
        "GET",
        "https://pokeapi.co/api/v2/pokemon",
        true
    );
    xhr.onload = function () {
        if (this.status === 200) {
            var data = JSON.parse(this.responseText);
            const PokemonList = document.getElementById("pokemonList");

            data.results.forEach((pokemon) => {
                const cardHtml = `
                    <div class="col-md-3 mb-3 d-flex">
                        <div class="card text-center flex-fill">
                            <div class="card-body shadow flex-column">
                                <p class="card-title text-center">${pokemon.name}</p>
                                <a href="${pokemon.url}" class="btn btn-primary mt-auto">Detail</a>
                            </div>
                        </div>
                    </div>
                `;
                PokemonList.innerHTML += cardHtml;
            });
        } else {
            console.error("Error:", this.statusText);
        }
    };

    xhr.onerror = function () {
        console.error("Request error...");
    };

    xhr.send();                
});
