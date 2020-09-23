// testimonials
(function(){
    let testimonialContent = [
        {img: "a", name: "John", citat: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?"},
        {img: "b", name: "Sandy", citat: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock"},
        {img: "c", name: "Amy", citat: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."},
        {img: "d", name: "Tyrell", citat: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."},
        {img: "e", name: "Wanda", citat: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    ]
    let count = 0;

    let buttonsTestimonials = document.querySelectorAll(".button-testimonial");
    let pictureTestimonials = document.getElementsByClassName("customer-test")[0]
    let nameTestimonials = document.getElementsByClassName("customer-name")[0]
    let citatTestimonials = document.getElementsByClassName("citat-customer")[0]



    buttonsTestimonials.forEach(function(btnTest){
        btnTest.addEventListener("click", function(){
            if(btnTest.classList.contains("btn-right-testimonials")){
                count++;
                if(count > testimonialContent.length - 1){
                    count = 0;
                }
                pictureTestimonials.src = "./" + testimonialContent[count].img + ".jpg"
                nameTestimonials.textContent = testimonialContent[count].name;
                citatTestimonials.textContent = testimonialContent[count].citat;
            }else if(btnTest.classList.contains("btn-left-testimonials")){
                count--;
                if(count < 0){
                    count = testimonialContent.length - 1;
                }
                pictureTestimonials.src = `./${testimonialContent[count].img}.jpg`
                nameTestimonials.textContent = testimonialContent[count].name;
                citatTestimonials.textContent = testimonialContent[count].citat;
            }
        })
    })
})();