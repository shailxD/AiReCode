function setupAutoResizeTextarea() {
    const textarea = document.getElementById('code-input');
  
    textarea.addEventListener('input', () => {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    });
  
    // Trigger the input event on page load
    textarea.dispatchEvent(new Event('input'));
  }
  
  export { setupAutoResizeTextarea };
  