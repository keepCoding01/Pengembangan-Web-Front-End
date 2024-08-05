class Search {
  constructor(data) {
    this.data = data;
  }

  equal(text, keyword) {
    return text.toLowerCase().indexOf(keyword.toLowerCase()) == -1;
  }

  byTitle(keyword) {
    for (let i = 0; i < this.data.length; i++) {
      const book = this.data[i];
      let title = book.querySelector(".title").innerText;
      let author = book.querySelector(".author").innerText;
      let publisher = book.querySelector(".publisher").innerText;
      let year = book.querySelector(".year").innerText;

      if (this.equal(title, keyword) || this.equal(author, keyword) || this.equal(publisher, keyword) || this.equal(year, keyword)) {
        book.style.display = "none";
      } else {
        book.style.display = "block";
      }
    }
  }
}

let keyword = document.querySelector("#keyword");

const search = () => {
  let books = document.querySelectorAll(".book");
  let search = new Search(books);
  search.byTitle(keyword.value);
};

keyword.addEventListener("keyup", search);
