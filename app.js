document.addEventListener("DOMContentLoaded", function () {
    fetch('characters.json')
        .then(response => response.json())
        .then(data => {
            const dataDisplay = document.getElementById("displayCharacters");

            data.forEach(character => {
                const characterContainer = document.createElement("div");
                characterContainer.classList.add("character-container");

                // Create and append image
                const imageElement = document.createElement("img");
                imageElement.src = character.data.image;
                imageElement.alt = character.name;
                characterContainer.appendChild(imageElement);

                // Create and append character info sections
                const infoContainer = document.createElement("div");
                infoContainer.classList.add("character-info");

                // Create and append name
                const nameElement = document.createElement("div");
                nameElement.innerHTML = `<strong>Name:</strong> ${character.name}`;
                infoContainer.appendChild(nameElement);

                // Create and append loves
                const lovesElement = document.createElement("div");
                lovesElement.innerHTML = `<strong>Loves:</strong> ${character.data.loves.join(", ")}`;
                infoContainer.appendChild(lovesElement);

                // Create and append likes
                const likesElement = document.createElement("div");
                likesElement.innerHTML = `<strong>Likes:</strong> ${character.data.likes.join(", ")}`;
                infoContainer.appendChild(likesElement);

                // Create and append dislikes
                const dislikesElement = document.createElement("div");
                dislikesElement.innerHTML = `<strong>Dislikes:</strong> ${character.data.dislikes.join(", ")}`;
                infoContainer.appendChild(dislikesElement);

                // Create and append hates
                const hatesElement = document.createElement("div");
                hatesElement.innerHTML = `<strong>Hates:</strong> ${character.data.hates.join(", ")}`;
                infoContainer.appendChild(hatesElement);

                // Append the info container to the character container
                characterContainer.appendChild(infoContainer);

                // Append the character container to the display area
                dataDisplay.appendChild(characterContainer);
            });
        })
        .catch(error => console.error("Error fetching JSON data:", error));
});
