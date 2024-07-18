document.addEventListener("DOMContentLoaded", function () {
    fetch('characters.json')
        .then(response => response.json())
        .then(data => {
            const dataDisplay = document.getElementById("displayCharacters");

            // Loop through each character in the JSON data
            data.forEach(character => {
                // Create a container for each character
                const characterContainer = document.createElement("div");

                // Create HTML elements to display the JSON data
                const nameElement = document.createElement("p");
                nameElement.textContent = "Name: " + character.name;

                const lovesElement = document.createElement("p");
                lovesElement.textContent = "Loves: " + character.data.loves.join(", ");

                const likesElement = document.createElement("p");
                likesElement.textContent = "Likes: " + character.data.likes.join(", ");

                const dislikesElement = document.createElement("p");
                dislikesElement.textContent = "Dislikes: " + character.data.dislikes.join(", ");

                const hatesElement = document.createElement("p");
                hatesElement.textContent = "Hates: " + character.data.hates.join(", ");
                
                const imagesElement = document.createElement("img");
                imagesElement.src = character.data.image;
                imagesElement.alt = character.name;
                imagesElement.classList.add("image-left", "image");
                
            
                // Append the elements to the character container
                characterContainer.appendChild(imagesElement);
                characterContainer.appendChild(nameElement);
                characterContainer.appendChild(lovesElement);
                characterContainer.appendChild(likesElement);
                characterContainer.appendChild(dislikesElement);
                characterContainer.appendChild(hatesElement);
                

                // Append the character container to the "dataDisplay" div
                dataDisplay.appendChild(characterContainer);
            
        
                 
            });
        })
        .catch(error => console.error("Error fetching JSON data:", error));
});
