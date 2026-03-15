// AI Tabs functionality
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.ai-tabs-container').forEach(function(container) {
    var buttons = container.querySelectorAll('.ai-tab-btn');
    var panels = container.querySelectorAll('.ai-tab-panel');

    buttons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        var tab = this.getAttribute('data-tab');

        buttons.forEach(function(b) { b.classList.remove('active'); });
        panels.forEach(function(p) { p.classList.remove('active'); });

        this.classList.add('active');
        container.querySelector('[data-panel="' + tab + '"]').classList.add('active');
      });
    });
  });
});