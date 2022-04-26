let nav = document.querySelectorAll('li');
nav.forEach(li => {
    li.addEventListener('click', function () {
        nav.forEach(li => li.classList.remove('active'));
        this.classList.add('active');
    });
});

