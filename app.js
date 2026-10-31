const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const result = document.getElementById("result");

searchBtn.addEventListener("click", function (){
    const query = searchInput.value.trim();

    fetch("superheroes.php?query=" + encodeURIComponent(query))
      .then(response => {
        if (!response.ok) {
            throw new Error("Request failed: " + response.status);
        }
        return response.text();
      })
      .then(html => {
        result.innerHTML = html;
        if (result.querySelector("h3")) {
          fireworks();
        }
      })
      .catch(error => {
        console.log(error);
        result.textContent = "Something went wrong. Please try again. :)";
      });

      function fireworks() {
        const colors = ["lightcoral", "lightblue", "gold", "white", "hotpink"];

        for (let burst = 0; burst < 3; burst++) {
          const x = 15 + Math.random() * 70;
          const y = 15 + Math.random() * 40;

          for (let i = 0; i <24; i++) {
            const spark = document.createElement("div");
            const angle = (i / 24) * 2 * Math.PI;
            const distance = 60 + Math.random() * 60;

            spark.className = "spark";
            spark.style.left = x + "vw";
            spark.style.top = y + "vh";
            spark.style.background = colors[Math.floor(Math.random() * colors.length)];
            spark.style.setProperty("--dx", Math.cos(angle) * distance + "px");
            spark.style.setProperty("--dy", Math.sin(angle) * distance + "px");
            spark.style.animationDelay = burst * 0.3 + "s";

           spark.addEventListener("animationend", function () {
           spark.remove();
           });
           document.body.appendChild(spark);
              
          }
        }
      }
});