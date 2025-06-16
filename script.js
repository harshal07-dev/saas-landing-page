// Wait until the DOM is fully loaded
        document.addEventListener("DOMContentLoaded", function () {
            const hamburger = document.querySelector(".hamburger-menu");
            const nav = document.querySelector(".main-nav");
            
            // Check if elements exist
            if (!hamburger || !nav) {
                console.error("Hamburger menu or navigation not found!");
                return;
            }
            
            // Toggle nav visibility on hamburger click
            hamburger.addEventListener("click", function () {
                nav.classList.toggle("active");
                
                // Toggle icon between bars and close
                const icon = hamburger.querySelector("i");
                if (icon) {
                    icon.classList.toggle("fa-bars");
                    icon.classList.toggle("fa-xmark"); // Close icon
                }
            });
            
            // Close nav when a link is clicked (mobile usability)
            const navLinks = document.querySelectorAll(".main-nav .nav-links a");
            navLinks.forEach(link => {
                link.addEventListener("click", function () {
                    nav.classList.remove("active");
                    
                    // Reset hamburger icon
                    const icon = hamburger.querySelector("i");
                    if (icon) {
                        icon.classList.add("fa-bars");
                        icon.classList.remove("fa-xmark");
                    }
                });
            });
            
            // Close menu when clicking outside
            document.addEventListener("click", function(event) {
                if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
                    nav.classList.remove("active");
                    
                    // Reset hamburger icon
                    const icon = hamburger.querySelector("i");
                    if (icon) {
                        icon.classList.add("fa-bars");
                        icon.classList.remove("fa-xmark");
                    }
                }
            });
        });