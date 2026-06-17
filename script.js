document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // HOME SLIDER
    // ==========================================

    const slides = document.querySelectorAll(".slide");
    const sliderDots = document.querySelectorAll(".slider-dots .dot");

    if (slides.length && sliderDots.length) {

        let current = 0;

        function showSlide(index) {

            slides.forEach(slide =>
                slide.classList.remove("active")
            );

            sliderDots.forEach(dot =>
                dot.classList.remove("active-dot")
            );

            slides[index].classList.add("active");
            sliderDots[index].classList.add("active-dot");
        }

        sliderDots.forEach((dot, index) => {

            dot.addEventListener("click", () => {

                current = index;
                showSlide(current);

            });

        });

        setInterval(() => {

            current++;

            if (current >= slides.length) {
                current = 0;
            }

            showSlide(current);

        }, 5000);
    }

    // ==========================================
    // PROMO SLIDER
    // ==========================================

    const promoContainer = document.querySelector(".promo-container");
    const promoDots = document.querySelectorAll(".promo-dots .dot");
    const cards = document.querySelectorAll(".promo-card");

    if (promoContainer && promoDots.length && cards.length) {

        promoDots.forEach((dot, index) => {

            dot.addEventListener("click", () => {

                const cardWidth = cards[0].offsetWidth + 25;

                promoContainer.scrollTo({
                    left: cardWidth * index,
                    behavior: "smooth"
                });

                promoDots.forEach(d =>
                    d.classList.remove("active")
                );

                dot.classList.add("active");

            });

        });

    }

    // ==========================================
    // TESTIMONIALS
    // ==========================================

    const testimonials = document.querySelectorAll(".testimonial");
    const testimonialDots = document.querySelectorAll(".t-dot");

    if (testimonials.length && testimonialDots.length) {

        let currentTestimonial = 0;

        function showTestimonial(index) {

            testimonials.forEach(testimonial =>
                testimonial.classList.remove("active")
            );

            testimonialDots.forEach(dot =>
                dot.classList.remove("active-dot")
            );

            testimonials[index].classList.add("active");
            testimonialDots[index].classList.add("active-dot");

        }

        testimonialDots.forEach((dot, index) => {

            dot.addEventListener("click", () => {

                currentTestimonial = index;
                showTestimonial(index);

            });

        });

        setInterval(() => {

            currentTestimonial++;

            if (currentTestimonial >= testimonials.length) {
                currentTestimonial = 0;
            }

            showTestimonial(currentTestimonial);

        }, 5000);
    }

    // ==========================================
    // SEARCH
    // ==========================================

    const searchIcon = document.querySelector(".search-icon");
    const searchForm = document.querySelector(".search-form");
    const searchBox = document.getElementById("search-box");

    const availableCakes = [
        "pastry",
        "cakes",
        "cookie",
        "bread",
        "cheesecake",
        "cupcake",
        "croissant",
        "beverages",
        "brownies",
        "sandwiches"
    ];

    function performCakeSearch() {

        const query = searchBox.value.toLowerCase().trim();

        if (query === "") {
            alert("Please enter a cake flavor to search!");
            return;
        }

        const isCakeAvailable = availableCakes.some(cake =>
            cake.toLowerCase().includes(query)
        );

        if (isCakeAvailable) {
            alert(`🎉 ${query} is available!`);
        } else {
            alert(`🧁 Sorry, ${query} is not available.`);
        }

    }
    const searchLabel = document.querySelector(
    '.search-form .fa-magnifying-glass'
);

if(searchLabel){

    searchLabel.addEventListener("click", () => {
        performCakeSearch();
    });

}

    if (searchIcon && searchForm && searchBox) {

        searchIcon.addEventListener("click", (e) => {

            e.stopPropagation();

            searchForm.classList.toggle("active");

            if (searchForm.classList.contains("active")) {
                searchBox.focus();
            }

        });

        searchBox.addEventListener("keydown", (e) => {

            if (e.key === "Enter") {

                e.preventDefault();
                performCakeSearch();

            }

        });

    }

    // ==========================================
    // MOBILE MENU
    // ==========================================

    const menuIcon = document.querySelector(".menu-icon");
    const navbar = document.querySelector(".navbar");

    if (menuIcon && navbar) {

        menuIcon.addEventListener("click", (e) => {

            e.stopPropagation();

            navbar.classList.toggle("active");

            if (searchForm) {
                searchForm.classList.remove("active");
            }

        });

    }

    document.addEventListener("click", (e) => {

        if (
            searchForm &&
            searchIcon &&
            !searchForm.contains(e.target) &&
            !searchIcon.contains(e.target)
        ) {
            searchForm.classList.remove("active");
        }

        if (
            navbar &&
            menuIcon &&
            !navbar.contains(e.target) &&
            !menuIcon.contains(e.target)
        ) {
            navbar.classList.remove("active");
        }

    });

    // ==========================================
    // VIDEO SLIDER
    // ==========================================

    const videoSlides = document.querySelectorAll(".video-item");
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");

    if (videoSlides.length && nextBtn && prevBtn) {

        let currentIdx = 0;

        function changeSlide(newIdx) {

            videoSlides[currentIdx].classList.remove("active");

            currentIdx = newIdx;

            videoSlides[currentIdx].classList.add("active");

        }

        nextBtn.addEventListener("click", () => {

            let nextIdx = currentIdx + 1;

            if (nextIdx >= videoSlides.length) {
                nextIdx = 0;
            }

            changeSlide(nextIdx);

        });

        prevBtn.addEventListener("click", () => {

            let prevIdx = currentIdx - 1;

            if (prevIdx < 0) {
                prevIdx = videoSlides.length - 1;
            }

            changeSlide(prevIdx);

        });

    }

    // ==========================================
    // FEEDBACK FORM
    // ==========================================

    const feedbackForm = document.getElementById("feedbackForm");

    if (feedbackForm) {

        feedbackForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const name = document.getElementById("userName").value;
            const ratingValue = document.getElementById("userRating").value;
            const message = document.getElementById("userMessage").value;

            let stars = "";

            for (let i = 0; i < 5; i++) {
                stars += (i < ratingValue) ? "★" : "☆";
            }

            const reviewCard = document.createElement("div");

            reviewCard.className = "review-card";

            reviewCard.innerHTML = `
                <h3>${name}</h3>
                <p>"${message}"</p>
                <div class="stars">${stars}</div>
            `;

            const container = document.querySelector(".review-container");

            if (container) {
                container.insertBefore(reviewCard, container.firstChild);
            }

            this.reset();

            alert("Thank you for your sweet feedback!");

        });

    }

});