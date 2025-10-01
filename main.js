document.querySelector('.hamburger').addEventListener('click', () => {
   const midUl = document.querySelector('.mid-ul').classList.toggle('active');
       midUl.style.scrollHeight="100px";
       document.querySelector('.nav-links').style.transition="0.9s ease-in-out";
});


// accordion
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
const myAccordion = document.getElementsByClassName("accordion")

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
         const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
         if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
             currentlyActiveAccordionItemHeader.classList.remove("active");
             currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
         }
        accordionItemHeader.classList.toggle('active');
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains('active')) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
            myAccordion.style.marginBottom = "100px";
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
});

// accordion
