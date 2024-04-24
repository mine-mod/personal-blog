const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
});


document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = 'index.html';
});