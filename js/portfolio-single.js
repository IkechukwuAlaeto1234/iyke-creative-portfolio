document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    if (!projectId) {
        window.location.href = 'portfolio.html';
        return;
    }

    fetchProjectData(projectId);
    setupGalleryEvents();
    document.getElementById('current-year').textContent = new Date().getFullYear();
});

/**
 * Simulate fetching project data
 */
function fetchProjectData(projectId) {
    setTimeout(() => {
        const projectData = getProjectData(projectId);

        if (projectData) {
            populateProjectDetails(projectData);
            fetchRelatedProjects(projectData.category, projectId);
        } else {
            handleProjectNotFound();
        }
    }, 300);
}

/**
 * Simulated project database
 */
function getProjectData(projectId) {
    const projects = {
        '1': {
            id: '1',
            title: 'Fashion E-commerce Store',
            subtitle: 'Complete E-commerce Solution',
            client: 'Urban Styles',
            date: 'January 2025',
            category: 'Web Design',
            tools: 'HTML5, CSS3, JavaScript, Shopify',
            description: `<p>Urban Styles needed a full e-commerce site...</p>`,
            highlights: ['Responsive design', 'Product filtering', 'Analytics dashboard'],
            challenge: `<p>Challenges included inventory and mobile optimization...</p>`,
            solution: `<p>Custom Shopify integration and unique filtering tools...</p>`,
            results: `<p>Sales increased by 57% in Q1...</p>`,
            testimonial: "Working with Iyke Visuals was a game-changer...",
            testimonialName: "Olivia Chen",
            testimonialPosition: "Founder, Urban Styles",
            images: [
                "images/Odaplace_Your_Marketplace_Awaits.jpeg",
                "images/Odaplace_Your_Marketplace_Awaits_2.jpeg",
                "images/Odaplace_Your_Marketplace_Awaits_3.jpeg"
            ],
            next: '2',
            prev: '3'
        },
        '2': {
            id: '2',
            title: 'Luxury Restaurant Website',
            subtitle: 'Digital Presence for Fine Dining',
            client: 'Saveur Restaurant',
            date: 'February 2025',
            category: 'Web Design',
            tools: 'HTML5, CSS3, JavaScript, WordPress',
            description: `<p>Saveur needed an elegant restaurant site...</p>`,
            highlights: ['Reservation system', 'Chef profiles', 'Event calendar'],
            challenge: `<p>Digital brand translation, booking, and content challenges...</p>`,
            solution: `<p>WordPress site with OpenTable integration...</p>`,
            results: `<p>Reservations increased by 68%...</p>`,
            testimonial: "Iyke Visuals captured our essence beautifully.",
            testimonialName: "Jean-Michel Dubois",
            testimonialPosition: "Executive Chef",
            images: [
                "/api/placeholder/1200/700",
                "/api/placeholder/1200/700"
            ],
            next: '3',
            prev: '1'
        },
        '3': {
            id: '3',
            title: 'Travel Booking Platform',
            subtitle: 'Modern Travel Experience',
            client: 'Wanderlust Adventures',
            date: 'March 2025',
            category: 'Web Design',
            tools: 'React.js, Node.js, MongoDB, Stripe API',
            description: `<p>Booking platform for global adventures...</p>`,
            highlights: ['Interactive map', 'Secure payments', 'User dashboard'],
            challenge: `<p>Challenges in filtering, scalability, and integration...</p>`,
            solution: `<p>React frontend, Node.js backend with MongoDB...</p>`,
            results: `<p>125% more bookings in 6 months...</p>`,
            testimonial: "Best travel tech partner we’ve had!",
            testimonialName: "Sandra Lopez",
            testimonialPosition: "CEO, Wanderlust",
            images: [
                "/api/placeholder/1200/700",
                "/api/placeholder/1200/700"
            ],
            next: '1',
            prev: '2'
        }
    };

    return projects[projectId] || null;
}

/**
 * Populate the project details dynamically
 */
function populateProjectDetails(project) {
    document.querySelector('.project-title').textContent = project.title;
    document.querySelector('.project-subtitle').textContent = project.subtitle;
    document.querySelector('.project-client').textContent = project.client;
    document.querySelector('.project-date').textContent = project.date;
    document.querySelector('.project-category').textContent = project.category;
    document.querySelector('.project-tools').textContent = project.tools;

    document.querySelector('.project-description').innerHTML = project.description;
    document.querySelector('.project-challenges').innerHTML = project.challenge;
    document.querySelector('.project-solution').innerHTML = project.solution;
    document.querySelector('.project-results').innerHTML = project.results;

    const highlightsList = document.querySelector('.project-highlights');
    highlightsList.innerHTML = '';
    project.highlights.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        highlightsList.appendChild(li);
    });

    document.querySelector('.project-testimonial blockquote').textContent = project.testimonial;
    document.querySelector('.project-testimonial cite').textContent = `${project.testimonialName}, ${project.testimonialPosition}`;

    const gallery = document.querySelector('.project-gallery');
    gallery.innerHTML = '';
    project.images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = project.title;
        img.classList.add('gallery-img');
        gallery.appendChild(img);
    });

    document.querySelector('.project-prev').href = `project.html?id=${project.prev}`;
    document.querySelector('.project-next').href = `project.html?id=${project.next}`;
}

/**
 * Fallback if project is not found
 */
function handleProjectNotFound() {
    const container = document.querySelector('.project-details');
    container.innerHTML = `
        <div class="not-found">
            <h2>Project Not Found</h2>
            <p>The project you are looking for does not exist.</p>
            <a href="portfolio.html">Return to Portfolio</a>
        </div>
    `;
}

/**
 * Dummy function for setting up image click events (if required)
 */
function setupGalleryEvents() {
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('gallery-img')) {
            // Implement modal or zoom functionality here
            alert('Image clicked: ' + e.target.src);
        }
    });
}

/**
 * Fetch related projects (simulate by filtering same category)
 */
function fetchRelatedProjects(category, currentId) {
    const container = document.querySelector('.related-projects');
    if (!container) return;

    const allProjects = ['1', '2', '3'].map(id => getProjectData(id));
    const related = allProjects.filter(p => p.category === category && p.id !== currentId);

    container.innerHTML = related.map(project => `
        <div class="related-project">
            <img src="${project.images[0]}" alt="${project.title}">
            <h4>${project.title}</h4>
            <a href="project.html?id=${project.id}">View Project</a>
        </div>
    `).join('');
}
/**
 * Initialize the current year in the footer
 */
function initFooterYear() {
    const year = new Date().getFullYear();
    document.querySelector('.footer-year').textContent = year;
}