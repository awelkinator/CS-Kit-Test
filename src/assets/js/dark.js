//
//    The Dark Mode System
//

// helper functions to toggle dark mode
function enableDarkMode() {document.body.classList.add('dark-mode');localStorage.setItem('theme', 'dark');}
//comment
function disableDarkMode() {document.body.classList.remove('dark-mode');localStorage.setItem('theme', 'light');}
//comment
function detectColorScheme() {let theme = 'light';if (localStorage.getItem('theme')) {theme = localStorage.getItem('theme');} else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {theme = 'dark';}theme === 'dark' ? enableDarkMode() : disableDarkMode();}
// run on page load
detectColorScheme();
// add event listener to the dark mode button toggle
document.getElementById('dark-mode-toggle').addEventListener('click', () => {localStorage.getItem('theme') === 'light' ? enableDarkMode() : disableDarkMode();});
