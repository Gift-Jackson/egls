const booksResult = document.querySelector(".books-result");
const search = document.querySelector(".search-input");

search.addEventListener("input", () => {
    const searchValue = search.value.trim();

    fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&key=AIzaSyCTw5uPrpxqVdbBM23ygUr4_6lkXiP6fak`
    )
        .then((res) => res.json())
        .then((data) => {
            console.log(data.items)
            displayBooks(data.items);
        })
        .catch((error) => console.log(error));
});

function displayBooks(books) {
    const booksHTML = books
        .map((book) => {
            const img = book.volumeInfo.imageLinks
                ? book.volumeInfo.imageLinks.smallThumbnail
                : "No Image";
            const title = book.volumeInfo.title;
            const publishedDate = book.volumeInfo.publishedDate || "No Date Available";
            const author = book.volumeInfo.authors
                ? book.volumeInfo.authors[0]
                : "Unknown Author";
            const categories = book.volumeInfo.categories
                ? book.volumeInfo.categories[0]
                : "Unknown Categories";
            const publisher = book.volumeInfo.publisher
                ? book.volumeInfo.publisher[0]
                : "Unknown Publisher";
            const description = book.volumeInfo.description || "No Description Available";

            return `<div class="book" data-aos="zoom-in" data-aos-delay="300">
                     <div class="book-cover">
                        <img src="${img}" alt="${title}">
                    </div>                    
                    <div class="book-body">
                        <h3>${title}</h3>
                        <p class="author"><i>${author}</i></p>
                    </div>
                    <button class="add-cart-btn" onclick="viewBook('${title}', '${author}', '${img}', '${description}', '${publishedDate}', '${categories}', '${publisher}')">
                        <span>See details <i class="fa-regular fa-hand"></i></span>
                    </button>
                </div>`;
        })
        .join("");

    booksResult.innerHTML = booksHTML;
}

function viewBook(title, author, img, description, publishedDate, categories, publisher) {
    const bookInfo = {
        title: title,
        author: author,
        img: img,
        description: description,
        publishedDate: publishedDate,
        categories: categories,
        publisher: publisher,
    };

    localStorage.setItem("viewedBook", JSON.stringify(bookInfo));
    window.location.href = "view_book.html";
}
