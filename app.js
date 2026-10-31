document.getElementById("search-btn").addEventListener("click", function () {
    fetch("superheroes.php")
      .then(response => response.text())
      .then(data => {
        alert(data);
      })
      .catch(error => {
        console.log(error);
      });
});