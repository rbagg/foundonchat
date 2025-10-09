// AI Tabs JavaScript - Simple tab switching functionality
// Place this file in your root directory or js/ folder

document.addEventListener('DOMContentLoaded', function() {
  // Get all tab containers on the page
  const tabContainers = document.querySelectorAll('.ai-tabs-container');
  
  tabContainers.forEach(container => {
    const tabButtons = container.querySelectorAll('.ai-tab-btn');
    const tabPanels = container.querySelectorAll('.ai-tab-panel');
    
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        const targetTab = this.getAttribute('data-tab');
        
        // Remove active class from all buttons and panels in this container
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanels.forEach(panel => panel.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Show corresponding panel
        const targetPanel = container.querySelector(`.ai-tab-panel[data-panel="${targetTab}"]`);
        if (targetPanel) {
          targetPanel.classList.add('active');
        }
      });
    });
  });
});