// Simulated project data (in real use, fetch from a backend or JSON file)
const project = {
    title: "Responsive Branding Website",
    breadcrumbTitle: "Responsive Branding Website",
    mainImage: "images/projects/branding-main.jpg",
    galleryImages: [
        "images/projects/branding-1.jpg",
        "images/projects/branding-2.jpg",
        "images/projects/branding-3.jpg",
        "images/projects/branding-4.jpg"
    ],
    description: `
        This project involved designing a responsive and engaging brand website for a startup. 
        The focus was on clean visuals, intuitive navigation, and performance optimization.
    `,
    client: "Startup X",
    date: "April 2025",
    category: "Web Design",
    tools: "Figma, HTML, CSS, JavaScript",
    highlights: [
        "Mobile-first responsive layout",
        "Optimized images and loading speed",
        "Custom branding elements and typography"
    ],
    challenge: `
        The client needed a web presence that looked great on all devices while maintaining brand consistency.
        Tight deadline and limited brand materials added to the complexity.
    `,
    solution: `
        Designed a flexible grid system and leveraged reusable components.
        Created brand elements from scratch based on target audience and industry research.
    `,
    results: `
        Traffic increased by 45% within 3 weeks of launch. 
        Client reported improved user engagement and positive customer feedback.
    `,
    testimonial: {
        text: "Iyke Visuals delivered beyond expectations. The branding and site layout were spot on.",
        name: "Jane Doe",
        position: "Founder, Startup X",
        avatar: "images/testimonials/jane.jpg"
    },
    relatedProjects: [
        {
            title: "E-Commerce UI Redesign",
            image: "images/projects/ecommerce.jpg",
            link: "project-ecommerce.html"
        },
        {
            title: "Social App Dashboard",
            image: "images/projects/social-dashboard.jpg",
            link: "project-social.html"
        }
    ]
};

// DOM population
document.getElementById("project-title").textContent = project.title;
document.getElementById("breadcrumb-title").textContent = project.breadcrumbTitle;
document.getElementById("project-main-img").src = project.mainImage;

const gallery = document.querySelectorAll(".gallery-img");
gallery.forEach((img, index) => {
    if (project.galleryImages[index]) {
        img.src = project.galleryImages[index];
        img.setAttribute("data-full", project.galleryImages[index]);
    }
});

document.getElementById("project-description").innerHTML = project.description;
document.getElementById("project-client").textContent = project.client;
document.getElementById("project-date").textContent = project.date;
document.getElementById("project-category").textContent = project.category;
document.getElementById("project-tools").textContent = project.tools;

// Highlights
const highlightsList = document.getElementById("project-highlights");
project.highlights.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    highlightsList.appendChild(li);
});

// Challenge & Solution
document.getElementById("project-challenge").innerHTML = project.challenge;
document.getElementById("project-solution").innerHTML = project.solution;
document.getElementById("project-results").innerHTML = project.results;

// Testimonial
document.getElementById("project-testimonial").textContent = project.testimonial.text;
document.getElementById("testimonial-name").textContent = project.testimonial.name;
document.getElementById("testimonial-position").textContent = project.testimonial.position;
document.getElementById("testimonial-avatar").src = project.testimonial.avatar;

// Related Projects
const relatedContainer = document.getElementById("related-projects");
project.relatedProjects.forEach(proj => {
    const div = document.createElement("div");
    div.className = "related-project-item";
    div.innerHTML = `
        <a href="${proj.link}">
            <img src="${proj.image}" alt="${proj.title}">
            <h4>${proj.title}</h4>
        </a>
    `;
    relatedContainer.appendChild(div);
});
// Navigation
const prevLink = document.getElementById("project-prev");
const nextLink = document.getElementById("project-next");

// Set href attributes for navigation links
prevLink.href = "project-previous.html";  // Replace with actual previous project link
nextLink.href = "project-next.html";      // Replace with actual next project link
// Add event listeners for gallery images
gallery.forEach(img => {
    img.addEventListener("click", function() {
        const fullSrc = this.getAttribute("data-full");
        if (fullSrc) {
            window.open(fullSrc, "_blank");
        }
    }
    );
}
);
// Add event listeners for navigation links
prevLink.addEventListener("click", function(event) {
    event.preventDefault();
    // Logic to navigate to the previous project
    window.location
        .href = prevLink.href;
}
);
nextLink.addEventListener("click", function(event) {
    event.preventDefault();
    // Logic to navigate to the next project
    window.location
        .href = nextLink.href;
}
);  
// Add event listeners for related projects
const relatedItems = document.querySelectorAll(".related-project-item a");
relatedItems.forEach(item => {
    item.addEventListener("click", function(event) {
        event.preventDefault();
        // Logic to navigate to the related project
        window.location.href = this.href;
    });
});
// Add event listeners for the main image
const mainImage = document.getElementById("project-main-img");
mainImage.addEventListener("click", function() {
    const fullSrc = this.getAttribute("data-full");
    if (fullSrc) {
        window.open(fullSrc, "_blank");
    }
}); 
// Add event listeners for the breadcrumb title
const breadcrumbTitle = document.getElementById("breadcrumb-title");
breadcrumbTitle.addEventListener("click", function() {
    // Logic to navigate back to the portfolio page
    window.location.href = "portfolio.html";
});
// Add event listeners for the project title
const projectTitle = document.getElementById("project-title");
projectTitle.addEventListener("click", function() {
    // Logic to navigate to the project details page
    window.location.href = "project.html?id=" + project.id;
});
// Add event listeners for the project description
const projectDescription = document.getElementById("project-description");
projectDescription.addEventListener("click", function() {
    // Logic to navigate to the project details page
    window.location.href = "project.html?id=" + project.id;
});
// Add event listeners for the project client
const projectClient = document.getElementById("project-client");
projectClient.addEventListener("click", function() {
    // Logic to navigate to the project details page
    window.location.href = "project.html?id=" + project.id;
});

// Add event listeners for the project date
const projectDate = document.getElementById("project-date");
projectDate.addEventListener("click", function() {
    // Logic to navigate to the project details page
    window.location.href = "project.html?id=" + project.id;
});
// Add event listeners for the project category
const projectCategory = document.getElementById("project-category");
projectCategory.addEventListener("click", function() {
    // Logic to navigate to the project details page
    window.location.href = "project.html?id=" + project.id;
});

// Add event listeners for the project tools
const projectTools = document.getElementById("project-tools");
projectTools.addEventListener("click", function() {
    // Logic to navigate to the project details page
    window.location.href = "project.html?id=" + project.id;
});

// Add event listeners for the project highlights
const projectHighlights = document.getElementById("project-highlights");
projectHighlights.addEventListener("click", function() {
    // Logic to navigate to the project details page
    window.location.href = "project.html?id=" + project.id;
});

// Add event listeners for the project challenge
const projectChallenge = document.getElementById("project-challenge");
projectChallenge.addEventListener("click", function() {
    // Logic to navigate to the project details page
    window.location.href = "project.html?id=" + project.id;
});

// Add event listeners for the project solution
const projectSolution = document.getElementById("project-solution");
projectSolution.addEventListener("click", function() {
    // Logic to navigate to the project details page
    window.location.href = "project.html?id=" + project.id;
});

const projectResults = document.getElementById("project-results");
projectResults.addEventListener("click", function() {
    // Logic to navigate to the project details page
    window.location.href = "project.html?id=" + project.id;
});

// Add event listeners for the project testimonial
const projectTestimonial = document.getElementById("project-testimonial");
projectTestimonial.addEventListener("click", function() {
    // Logic to navigate to the project details page
    window.location.href = "project.html?id=" + project.id;
});