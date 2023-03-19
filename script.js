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