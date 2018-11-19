(function() {
    let toggle4ptGrid = document.querySelector('.toggle-grid-4pt');
    let toggle8ptGrid = document.querySelector('.toggle-grid-8pt');
    let toggleLineHeight = document.querySelector('.toggle-lineHeight');

    toggle4ptGrid.addEventListener('click', function() {
        document.body.classList.toggle('show-grid-4pt');
        toggle4ptGrid.classList.toggle('active');
    });

    toggle8ptGrid.addEventListener('click', function() {
        document.body.classList.toggle('show-grid-8pt');
        toggle8ptGrid.classList.toggle('active');
    });

    toggleLineHeight.addEventListener('click', function() {
        document.body.classList.toggle('show-lineHeight')
        toggleLineHeight.classList.toggle('active');
    });
})();
