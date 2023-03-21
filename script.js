let menu = document.querySelector('.menu');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', function(){
    navbar.classList.toggle('active')
})

window.onscroll = function(){
    if (window.scrollY > 50){
        navbar.classList.remove('active');
    }
}


const faqs = document.querySelectorAll('.faq_container');

faqs.forEach(faq => { 
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
        
        const icon = faq.querySelector('.faq_icon i');

        if(icon.className === 'bx bx-chevron-down'){
            icon.className = 'bx bx-chevron-up';
        }
        else{
            icon.className = 'bx bx-chevron-down';
        }

    })
});