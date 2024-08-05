document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("register").addEventListener("click", function () {
    alert("Website Dalam Perbaikan");
  });

  document.getElementById("login").addEventListener("click", function () {
    alert("Website Dalam Perbaikan");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("search").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      let searchTerm = this.value.toLowerCase();
      let images = document.querySelectorAll(".photos img");

      images.forEach(function (img) {
        let genres = img.classList;

        let matches = false;

        genres.forEach(function (genre) {
          if (genre.includes(searchTerm)) {
            matches = true;
            return;
          }
        });

        if (matches) {
          img.style.display = "block";
        } else {
          img.style.display = "none";
        }
      });
    }
  });

  function changeBackgroundColor() {
    let r = document.getElementById("rangeR").value;
    let g = document.getElementById("rangeG").value;
    let b = document.getElementById("rangeB").value;

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }

  document.getElementById("rangeR").addEventListener("input", changeBackgroundColor);
  document.getElementById("rangeG").addEventListener("input", changeBackgroundColor);
  document.getElementById("rangeB").addEventListener("input", changeBackgroundColor);
});
