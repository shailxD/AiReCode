const darkMode = () => {
  const themeToggleBtns = document.querySelectorAll('#theme-toggle');
  const headerImg = document.querySelector('.header__img');
  const theme = localStorage.getItem('theme');
  const originalSrc = headerImg.getAttribute('src');

  // On mount
  if (theme === 'light-mode') {
    document.body.classList.add('light-mode');
  } else {
    headerImg.setAttribute('src', headerImg.getAttribute('data-src-dark'));
  }

  // Handlers
  const handleThemeToggle = () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light-mode');
      headerImg.setAttribute('src', originalSrc); // Switch to the light version of the image
    } else {
      localStorage.removeItem('theme');
      headerImg.setAttribute('src', headerImg.getAttribute('data-src-dark')); // Switch to the dark version of the image
    }
  };

  // Events
  themeToggleBtns.forEach((btn) =>
    btn.addEventListener('click', handleThemeToggle)
  );
};

export default darkMode;
