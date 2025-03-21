// Smooth Scrolling for Navigation
document.querySelectorAll('.navmenu a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Highlight Active Link on Scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navmenu a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 50) {
        current = section.getAttribute('id');
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  });
  
  // Fetch and Display Portfolio Projects (Simulated API)
  async function loadProjects() {
    const projectsContainer = document.querySelector('.portfolio-container');
  
    const response = await fetch('projects.json'); // Simulating API
    const projects = await response.json();
  
    projectsContainer.innerHTML = projects.map(project => `
      <div class="portfolio-box">
        <img src="${project.image}" alt="${project.title}" />
        <div class="portfolio-layer">
          <h4>${project.title}</h4>
          <p>${project.description}</p>
          <a href="${project.link}" target="_blank"><i class="bx bx-link-external"></i></a>
        </div>
      </div>
    `).join('');
  }
  
  document.addEventListener('DOMContentLoaded', loadProjects);
  
  // Contact Form Validation
  document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    
    const name = document.querySelector('input[placeholder="Full Name"]').value.trim();
    const email = document.querySelector('input[placeholder="Email Address"]').value.trim();
    const message = document.querySelector('textarea').value.trim();
  
    if (name === '' || email === '' || message === '') {
      alert('Please fill out all fields.');
      return;
    }
  
    alert('Message sent successfully!');
  });
  