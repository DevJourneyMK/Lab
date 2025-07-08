const accessKey = "JzkMVqYc_ctIo0HyQPSROC7LNAUJvz4JnXlGzaQyBwU";  
    const loadBtn = document.getElementById("loadBtn");
    const gallery = document.getElementById("gallery");

    loadBtn.addEventListener("click", async () => {
      try {
        gallery.innerHTML = ""; 

        const response = await fetch(`https://api.unsplash.com/photos/random?count=10&client_id=${accessKey}`);
        const images = await response.json();

        images.forEach(img => {
          const card = document.createElement("div");
          card.className = "card";

          const image = document.createElement("img");
          image.src = img.urls.regular;
          image.alt = img.alt_description || "Random Unsplash Image";

          card.appendChild(image);
          gallery.appendChild(card);
        });
      } catch (error) {
        console.error("Error fetching images:", error);
        alert("Failed to load images. Please try again.");
      }
    });