document.addEventListener("DOMContentLoaded", function () {
    fetch('festivals.json')
        .then(response => response.json())
        .then(data => {
            const dataDisplay = document.getElementById("festivalsDisplay");

            data.festivals.forEach(festival => {
                const festContainer = document.createElement("div");
                festContainer.classList.add("festival-container");
                
                // Create and append image
                const imageElement = document.createElement("img");
                imageElement.src = festival.image;
                imageElement.alt = festival.name;
                festContainer.appendChild(imageElement);

                // Create and append character info sections
                const infoContainer = document.createElement("div");
                infoContainer.classList.add("festival-info");

                // Create and append festival info sections
                const nameElement = document.createElement("div");
                nameElement.innerHTML = `<strong>Name:</strong> ${festival.name}`;
                infoContainer.appendChild(nameElement);

                const seasonElement = document.createElement("div");
                seasonElement.innerHTML = `<strong>Season:</strong> ${festival.season}`;
                infoContainer.appendChild(seasonElement);

                const dateElement = document.createElement("div");
                dateElement.innerHTML = `<strong>Date:</strong> ${festival.date}`;
                infoContainer.appendChild(dateElement);

                const locationElement = document.createElement("div");
                locationElement.innerHTML = `<strong>Location:</strong> ${festival.location}`;
                infoContainer.appendChild(locationElement);

                const timeElement = document.createElement("div");
                timeElement.innerHTML = `<strong>Time:</strong> ${festival.time}`;
                infoContainer.appendChild(timeElement);

                const detailsElement = document.createElement("div");
                detailsElement.innerHTML = `<strong>Details:</strong> ${festival.details}`;
                infoContainer.appendChild(detailsElement);

                const endElement = document.createElement("div");
                endElement.innerHTML = `<strong>End Time:</strong> ${festival.endTime}`;
                infoContainer.appendChild(endElement);

                festContainer.appendChild(infoContainer);
                // Append the festival container to the "dataDisplay" div
                dataDisplay.appendChild(festContainer);
            });
        })
        .catch(error => console.error("Error fetching JSON data:", error));
});
