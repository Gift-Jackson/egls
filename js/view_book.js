document.addEventListener("DOMContentLoaded", function () {
    const viewedBook = JSON.parse(localStorage.getItem("viewedBook"));

    if (viewedBook) {
        document.getElementById("bookImg").src = viewedBook.img;
        document.getElementById("bookTitle").innerText = viewedBook.title;
        document.getElementById("bookAuthor").innerText = viewedBook.author;
        document.getElementById("book-date").innerText = viewedBook.publishedDate;
        document.getElementById("book-category").innerText = viewedBook.categories;
        document.getElementById("book-publisher").innerText = viewedBook.publisher;
        document.getElementById("bookDescription").innerText = viewedBook.description;
        document.getElementById("bookTitleInput").value = viewedBook.title;
        document.getElementById("bookAuthorInput").value = viewedBook.author;
    } else {
        console.log("No book viewed");
    }
});



// Function to show the inquiry form with book title and author
function showInquiryForm() {
    document.querySelector(".modal-container").classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".close-btn").addEventListener("click", function () {
        document.querySelector(".modal-container").classList.remove("active");
    });

    // Close modal when overlay is clicked
    document.querySelector(".overlay").addEventListener("click", function () {
        document.querySelector(".modal-container").classList.remove("active");
    });
});

const orderBtn = document.querySelector(".order-btn")
orderBtn.addEventListener("click", showInquiryForm)


