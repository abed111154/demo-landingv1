// This is a simplified demo version of the Miraculia website
document.addEventListener('DOMContentLoaded', function() {
  // Create demo banner
  const demoBanner = document.createElement('div');
  demoBanner.className = 'demo-banner';
  demoBanner.textContent = 'DEMO VERSION - For the full version, contact: reshah4pc@gmail.com';
  document.body.prepend(demoBanner);

  // Create demo content
  const root = document.getElementById('root');
  
  // Main content container
  const demoContent = document.createElement('div');
  demoContent.className = 'demo-content';
  
  // Title
  const title = document.createElement('h1');
  title.className = 'demo-title';
  title.textContent = 'Miraculia';
  
  // Subtitle
  const subtitle = document.createElement('h2');
  subtitle.textContent = 'AI-Powered Marketing Agency';
  subtitle.style.marginBottom = '2rem';
  
  // Description
  const description = document.createElement('p');
  description.className = 'demo-description';
  description.textContent = 'This is a demo version of the Miraculia website. The full version includes an admin panel, functional contact form, working AI tools, and much more.';
  
  // Button
  const button = document.createElement('a');
  button.className = 'demo-button';
  button.href = 'https://github.com/yourusername/miraculia-demo';
  button.textContent = 'View on GitHub';
  button.target = '_blank';
  
  // Footer
  const footer = document.createElement('div');
  footer.className = 'demo-footer';
  footer.textContent = 'Copyright © 2025 Miraculia Marketing Solutions. All Rights Reserved.';
  
  // Append elements
  demoContent.appendChild(title);
  demoContent.appendChild(subtitle);
  demoContent.appendChild(description);
  demoContent.appendChild(button);
  root.appendChild(demoContent);
  document.body.appendChild(footer);
  
  // Add animation
  setTimeout(() => {
    title.style.opacity = '0';
    title.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
      title.textContent = 'Miraculia Demo';
      title.style.opacity = '1';
    }, 500);
  }, 1000);
});
