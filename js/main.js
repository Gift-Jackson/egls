const services = [
    {
        id: 1,
        icon: "school",
        title: "Teacher Training",
        content: "Teacher training is on new methodologies of teaching early years like Montessori method of teaching, handwriting and design, jolly phonics, effective classroom management and others."
    },
    {
        id: 2,
        icon: "menu_book",
        title: "Book Sales and distribution",
        content: "We also ensure the learning needs of individuals, academic institutions are met in the most efficient way possible."
    },
    {
        id: 3,
        icon: "accessibility_new",
        title: "Consultancy",
        content: "Our learning System also offers School owners consulting services to help develop strategies to ensure success in running."
    },
    {
        id: 4,
        icon: "computer",
        title: "Computer Training",
        content: "Basic computer skills on Microsoft Packages, computer appreciation and desktop publishing."
    },
]

const gridContainer = document.querySelector(".grid-container")

const displayData = () => {
    const displayServices = services.map((service) => {
        const { icon, title, content } = service;

        return `
        <div class="grid-box" data-aos="fade-up" data-aos-delay="300">
                    <div class="icon">
                        <span class="material-symbols-outlined">${icon}</span>
                    </div>
                    <div class="content">
                         <h3>${title}</h3>
                         <p>${content}</p>
                    </div>
                </div>
        
        `

    }).join("");

    gridContainer.innerHTML = displayServices

}
displayData()

const header = document.querySelector("header")

window.addEventListener("scroll", () => {
    (window.scrollY > 100 ? header.classList.add("scoll-header") : header.classList.remove("scoll-header"));
})








