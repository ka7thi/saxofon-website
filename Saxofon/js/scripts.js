window.addEventListener('load', function(){

    removeLoader();
    
    function addLoader() {
        document.querySelector(".loading").style.display = "flex";
    }
    
    function removeLoader() {
        setTimeout(function(){
            document.querySelector(".loading").style.display = "none";
        }, 300);
    }
    
    function scrollToTop() {
        
        const scrollToTop = document.querySelector(".scroll-top");
        
        if(window.scrollY >= 500){
            scrollToTop.style.display = "flex";
            scrollToTop.addEventListener("click", scrollAnimation);
        } else {
            scrollToTop.style.display = "none";
        };
    }
    
    function scrollAnimation() {
        if(window.scrollY > 0){
            window.scrollBy(0, -15);
            setTimeout(scrollAnimation, 1);
        };
    }
    
    window.addEventListener('scroll', scrollToTop);
    
});