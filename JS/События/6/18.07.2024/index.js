element.addEventListener('click', function(event) {
    event.stopPropagation();
    console.log('Clicked, but not propagated!');
});