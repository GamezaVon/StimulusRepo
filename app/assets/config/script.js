console.log('Ohapol!')
alert('yay')
document.addEventListener("DOMContentLoaded", function(event) {
    // Your code to run since DOM is loaded and ready
    form = document.getElementById('post_form');
    if (document.readyState == "interactive") {
        form.addEventListener('submit', function (e){
            form.reset();
        })
    }
});