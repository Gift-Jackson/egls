window.onload = () => {
    const transition_el = document.querySelector(".transition");
    const anchors = document.querySelectorAll(".nav-link")
  
    setTimeout(() => {
      transition_el.classList.remove("active")
    }, 500);
  
  
    anchors.forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = anchor.href;
  
  
        transition_el.classList.add("active")
  
        setTimeout(() => {
          window.location.href = target;
        }, 500);
      });
    })
  }
