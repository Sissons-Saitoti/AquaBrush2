document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.area .container[data-category]');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // update active state on buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            items.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

//reveal animation
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0,              // fire as soon as ANY part is visible
    rootMargin: '0px 0px -10% 0px'  // trigger a bit before it fully enters
});

revealEls.forEach(el => revealObserver.observe(el));