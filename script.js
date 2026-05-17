// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Offer Popup
    const popup = document.getElementById('offer-popup');
    const closeBtn = document.getElementById('close-popup');

    if (popup) {
        const closePopup = () => {
            if (popup.classList.contains('show')) {
                popup.classList.remove('show');
                setTimeout(() => {
                    popup.style.display = 'none';
                }, 400);
            }
        };

        // Show after 3 seconds
        setTimeout(() => {
            popup.style.display = 'flex';
            setTimeout(() => {
                popup.classList.add('show');
                
                // Auto-close after 5 more seconds
                setTimeout(closePopup, 5000);
            }, 10);
        }, 3000);

        closeBtn.addEventListener('click', closePopup);

        // Close on outside click
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                closePopup();
            }
        });
    }
    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlEl.setAttribute('data-theme', savedTheme);
        themeToggle.checked = savedTheme === 'dark';
    }

    themeToggle.addEventListener('change', () => {
        const currentTheme = themeToggle.checked ? 'dark' : 'light';
        htmlEl.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
    });

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mobileDropdown = document.querySelector('.mobile-dropdown');
    const mobileLinks = document.querySelectorAll('.mobile-links a');

    mobileBtn.addEventListener('click', () => {
        mobileDropdown.classList.toggle('open');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileDropdown.classList.remove('open');
        });
    });

    // Services Tabs Switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    const pricingGrids = document.querySelectorAll('.pricing-grid');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            pricingGrids.forEach(g => g.classList.remove('active'));

            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Scroll Animations using Intersection Observer
    const scrollSections = document.querySelectorAll('.section-scroll');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // observer.unobserve(entry.target); // Optional: if you only want it to animate once
            }
        });
    }, observerOptions);

    scrollSections.forEach(section => {
        scrollObserver.observe(section);
    });

    // Active Nav Link Update on Scroll
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        scrollSections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (current && link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Google Sheets Form Submission
    const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';
    const form = document.forms['google-sheet-form'];
    
    if (form) {
        const submitBtn = form.querySelector('.submit-btn');
        form.addEventListener('submit', e => {
            e.preventDefault();
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerText = 'Sending...';
            submitBtn.disabled = true;

            // Check if user forgot to put URL
            if (scriptURL === 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE') {
                setTimeout(() => {
                    alert('Please replace the scriptURL in script.js with your Google Apps Script Web App URL to actually send data to Google Sheets.');
                    submitBtn.innerText = originalBtnText;
                    submitBtn.disabled = false;
                }, 1000);
                return;
            }

            fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    alert('Thanks! Your message has been sent successfully.');
                    form.reset();
                    submitBtn.innerText = originalBtnText;
                    submitBtn.disabled = false;
                })
                .catch(error => {
                    console.error('Error!', error.message);
                    alert('Oops! Something went wrong. Please try connecting again.');
                    submitBtn.innerText = originalBtnText;
                    submitBtn.disabled = false;
                });
        });
    }

});
