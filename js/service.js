document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".service, .achievements, .future-plans");

    const revealOnScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run initially in case sections are already visible
});
