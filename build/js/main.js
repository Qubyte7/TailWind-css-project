const initApp=()=>{
    const hamburgerBtn = document.getElementById('hamburger-button');
    const mobileMenu=document.getElementById('mobile-menu');
    
    const toggleMenu = ()=> {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
    }
    hamburgerBtn.addEventListener('click',toggleMenu)
    //this line above we are saying that the hamburger btn listenon the click event 
    //and then because the class which is hidden the flex class is now is set
    mobileMenu.addEventListener('click',toggleMenu)
    //for the abpve ine of codes we specified that mobile-menu listen to the click event 
    //and then we now that this mobile menu come when the hunbergerBtn is already clicked to mean that the flex class is set
    //so if we click the moible-menu then the class hidden is the set
}
 
document.addEventListener('DOMContentLoaded',initApp)//we are specifying that the init App should be called after the HTML dom have loaded