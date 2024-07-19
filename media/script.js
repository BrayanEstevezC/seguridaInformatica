document.addEventListener("DOMContentLoaded", function() {

    const open = document.getElementById('open');
    const introduccion = document.getElementById('introduccion');
    
    open.onclick = function() {
        introduccion.classList.toggle("d-none");
    };
});
