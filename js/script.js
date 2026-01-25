document.addEventListener("DOMContentLoaded", () => {
  /* =======================
       MOBILE NAVIGATION
    ======================= */
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const navItems = document.querySelectorAll(".nav-link");

  if (hamburger && navLinks) {
    const spans = hamburger.querySelectorAll("span");

    function toggleMobileNav() {
      const isActive = navLinks.classList.toggle("active");
      hamburger.classList.toggle("open", isActive);

      spans[0].style.transform = isActive
        ? "rotate(45deg) translate(5px,5px)"
        : "none";
      spans[1].style.opacity = isActive ? "0" : "1";
      spans[2].style.transform = isActive
        ? "rotate(-45deg) translate(7px,-6px)"
        : "none";
    }

    function closeMobileNav() {
      navLinks.classList.remove("active");
      spans.forEach((span) => {
        span.style.transform = "none";
        span.style.opacity = "1";
      });
    }

    hamburger.addEventListener("click", toggleMobileNav);
    navItems.forEach((item) => item.addEventListener("click", closeMobileNav));
  }

  /* =======================
       SMOOTH SCROLL
    ======================= */
  const NAV_OFFSET = 80;

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;

      e.preventDefault();
      const position = target.offsetTop - NAV_OFFSET;

      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    });
  });

  /* =======================
       THEME TOGGLE
    ======================= */
  const themeToggle = document.getElementById("themeToggle");
  const root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    if (themeToggle) themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
  }

  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(savedTheme || (prefersDark ? "dark" : "light"));

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const newTheme =
        root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(newTheme);
    });
  }

  /* =======================
       REVIEWS AUTO SCROLL
    ======================= */
  const wrapper = document.querySelector(".reviews-list-wrapper");
  const reviewList = document.getElementById("reviewsList");
  const reviewForm = document.getElementById("reviewForm");

  if (wrapper && reviewList) {
    let offset = 0;
    let paused = false;
    const speed = parseFloat(wrapper.dataset.speed) || 1;

    function getCardHeight() {
      const gap = parseInt(getComputedStyle(reviewList).gap) || 25;
      const firstCard = reviewList.querySelector(".review-card");
      return firstCard ? firstCard.offsetHeight + gap : 180;
    }

    function autoScrollReviews() {
      if (!paused) {
        offset += speed;
        const cardHeight = getCardHeight();

        if (offset >= cardHeight) {
          reviewList.appendChild(reviewList.firstElementChild);
          offset = 0;
        }

        reviewList.style.transform = `translateY(-${offset}px)`;
      }
      requestAnimationFrame(autoScrollReviews);
    }

    wrapper.addEventListener("mouseenter", () => (paused = true));
    wrapper.addEventListener("mouseleave", () => (paused = false));
    wrapper.addEventListener("click", () => (paused = !paused));

    autoScrollReviews();

    // Add new review
    if (reviewForm) {
      reviewForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = reviewForm.querySelector("#reviewName").value.trim();
        const message = reviewForm.querySelector("#reviewMessage").value.trim();
        if (!name || !message) return;

        const card = document.createElement("div");
        card.className = "review-card";
        card.innerHTML = `
                    <p class="review-text">“${message}”</p>
                    <span class="review-author">— ${name}</span>
                `;
        reviewList.appendChild(card);
        reviewForm.reset();
      });
    }
  }

  /* =======================
       BRANDS LOGO CAROUSEL
    ======================= */
  const brandsTrack = document.getElementById("brandsTrack");
  if (brandsTrack) {
    let x = 0;
    const speed = 0.5;

    function animateBrands() {
      x -= speed;
      if (x <= -brandsTrack.scrollWidth / 2) x = 0;
      brandsTrack.style.transform = `translateX(${x}px)`;
      requestAnimationFrame(animateBrands);
    }

    animateBrands();
  }

  /* =======================
       SERVICES AUTO SLIDER
    ======================= */
  const servicesSlider = document.querySelector(".services-slider");
  const servicesTrack = document.querySelector(".services-track");

  if (servicesSlider && servicesTrack) {
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    let isPaused = false;
    let speed = 0.5;
    let animationId;

    /* ===== DUPLICATE TRACK FOR INFINITE LOOP ===== */
    if (!servicesTrack.dataset.cloned) {
      servicesTrack.innerHTML += servicesTrack.innerHTML;
      servicesTrack.dataset.cloned = "true";
    }

    const maxScroll = servicesTrack.scrollWidth / 2;

    /* ===== AUTO SCROLL ANIMATION ===== */
    function animate() {
      if (!isPaused && !isDown) {
        servicesSlider.scrollLeft += speed;

        if (servicesSlider.scrollLeft >= maxScroll) {
          servicesSlider.scrollLeft -= maxScroll;
        }
      }

      animationId = requestAnimationFrame(animate);
    }

    animate();

    /* ===== PAUSE ON HOVER ===== */
    servicesSlider.addEventListener("mouseenter", () => {
      isPaused = true;
    });

    servicesSlider.addEventListener("mouseleave", () => {
      isPaused = false;
    });

    /* ===== MOUSE DRAG SUPPORT ===== */
    servicesSlider.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX - servicesSlider.offsetLeft;
      scrollLeft = servicesSlider.scrollLeft;
      isPaused = true;
      servicesSlider.style.cursor = "grabbing";
    });

    window.addEventListener("mouseup", () => {
      if (!isDown) return;

      isDown = false;
      isPaused = false;
      servicesSlider.style.cursor = "grab";
    });

    servicesSlider.addEventListener("mousemove", (e) => {
      if (!isDown) return;

      const x = e.pageX - servicesSlider.offsetLeft;
      const walk = (x - startX) * 1.5;
      servicesSlider.scrollLeft = scrollLeft - walk;
    });

    /* ===== TOUCH SWIPE SUPPORT ===== */
    servicesSlider.addEventListener(
      "touchstart",
      (e) => {
        startX = e.touches[0].pageX;
        scrollLeft = servicesSlider.scrollLeft;
        isPaused = true;
      },
      { passive: true },
    );

    servicesSlider.addEventListener(
      "touchmove",
      (e) => {
        const x = e.touches[0].pageX;
        const walk = (x - startX) * 1.5;
        servicesSlider.scrollLeft = scrollLeft - walk;
      },
      { passive: true },
    );

    servicesSlider.addEventListener("touchend", () => {
      isPaused = false;
    });
  }

  const slides = document.querySelectorAll(".hero-slide");
  let current = 0;

  function changeSlide() {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }

  setInterval(changeSlide, 5000);
});
