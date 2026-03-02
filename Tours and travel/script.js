 (function () {
        // optional: close menu when clicking a link on mobile (improves UX)
        const links = document.querySelectorAll(".nav-links a");
        const linkbar = document.querySelector(".nav-links");
        const mobileToggle = document.querySelector(".open-icon")
        const close = document.querySelector(".close-icon")


        mobileToggle.addEventListener('click',function (e) {
         if(mobileToggle){
             mobileToggle.style.display = "none"
             close.style.display = "block";
             linkbar.style.display = "flex";
            }

            
        })
        close.addEventListener('click',function () {
            if (close) {
                linkbar.style.display = "none";
                mobileToggle.style.display = "flex";
                close.style.display = "none";
            }
            
        })

        links.forEach((link) => {
          link.addEventListener("click", (e) => {
            // if in mobile width (<=680) and menu is open, close it by removing the hash
            if (
              window.innerWidth <= 680 &&
              window.location.hash === "#mobile-toggle"
            ) {
              linkbar.style.display = "none"// push state to remove hash without reload
               mobileToggle.style.display = "flex";
               close.style.display = "none";
              history.pushState(
                "",
                document.title,
                window.location.pathname + window.location.search,
              );
            }
          });
        });
      })();


// document.body.style.background = "red";
const mouse = document.querySelector(".mousemov");

window.addEventListener("mousemove", function (e) {
  mouse.style.left = e.clientX + "px";
  mouse.style.top = e.clientY + "px";
});


/* ============================= */
/* SCROLL ANIMATION SYSTEM */
/* ============================= */

const fadeElements = document.querySelectorAll(
  ".service-card, .benefit-item, .section-heading, .featured-image, .booking-form"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

fadeElements.forEach((el) => {
  el.classList.add("fade-up");
  observer.observe(el);
});


const whatsappButtons = document.querySelectorAll(".whatsapp-btn");

whatsappButtons.forEach(btn=>{
        btn.addEventListener("click",function () {
          const service = this.closest(".service-card").getAttribute("data-service");
          const phone = "919765874434"
          const message = `Hello, I want enquiry about ${service}. Please share details.`;
          const encodemsg = encodeURIComponent(message)
          const url = `https://wa.me/${phone}?text=${encodemsg}`

          window.open(url,"_blank");
          
        })

})