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
            const id = book.id; // Unique ID of the book

            return `<div class="book" id="${id}" data-aos="zoom-in" data-aos-delay="300">
                     <div class="book-cover">
                        <img src="${book.volumeInfo.imageLinks?.smallThumbnail || 'No Image'}" alt="${book.volumeInfo.title}">
                    </div>                    
                    <div class="book-body">
                        <h3>${book.volumeInfo.title}</h3>
                        <p class="author"><i>${book.volumeInfo.authors?.[0] || 'Unknown Author'}</i></p>
                    </div>
                    <button class="add-cart-btn" onclick="viewBook('${id}')">
                        <span>See details <i class="fa-regular fa-hand"></i></span>
                    </button>
                </div>`;
        })
        .join("");

    booksResult.innerHTML = booksHTML;
}


function viewBook(id) {
    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
        .then((res) => res.json())
        .then((book) => {
            const bookInfo = {
                id: book.id,
                title: book.volumeInfo.title,
                author: book.volumeInfo.authors?.[0] || 'Unknown Author',
                img: book.volumeInfo.imageLinks?.smallThumbnail || 'No Image',
                description: book.volumeInfo.description || 'No Description Available',
                publishedDate: book.volumeInfo.publishedDate || 'No Date Available',
                categories: book.volumeInfo.categories?.[0] || 'Unknown Categories',
                publisher: book.volumeInfo.publisher || 'Unknown Publisher',
            };

            localStorage.setItem("viewedBook", JSON.stringify(bookInfo));
            window.location.href = "view_book.html";
        })
        .catch((error) => console.log(error));
}

