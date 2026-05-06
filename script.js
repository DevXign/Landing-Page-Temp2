// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Tab switching functionality for Services page
    const tabBtns = document.querySelectorAll('.tab-btn');
    const pricingGrids = document.querySelectorAll('.pricing-grid');

    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons and grids
                tabBtns.forEach(b => b.classList.remove('active'));
                pricingGrids.forEach(g => g.classList.remove('active'));

                // Add active class to clicked button
                btn.classList.add('active');

                // Show corresponding grid
                const targetId = btn.getAttribute('data-target');
                document.getElementById(targetId).classList.add('active');
            });
        });
    }

    // Auto-select service based on URL parameter (e.g. ?service=logo-plus)
    const urlParams = new URLSearchParams(window.location.search);
    const serviceParam = urlParams.get('service');
    
    if (serviceParam && document.getElementById('service-select')) {
        const select = document.getElementById('service-select');
        // Simple mapping from param to options
        if (serviceParam.includes('logo')) select.value = 'Logo Design';
        if (serviceParam.includes('poster')) select.value = 'Poster Design';
        if (serviceParam.includes('video')) select.value = 'Video Editing';
    }
});
