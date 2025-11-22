// Function to highlight the current section in the side-nav
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.main-section');
    const navLinks = document.querySelectorAll('.side-nav a');

    // Function to check which section is currently in view
    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.5 // trigger when 50% of the section is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove 'active' class from all links
                navLinks.forEach(link => link.classList.remove('active'));

                // Add 'active' class to the link corresponding to the intersecting section
                const targetId = entry.target.id;
                const activeLink = document.querySelector(`.side-nav a[href="#${targetId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
