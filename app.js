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
      })
      .catch(error => {
        console.log(error);
        result.textContent = "Something went wrong. Please try again. :)";
      });
});