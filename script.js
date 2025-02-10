document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.custom-navbar');
    let isFixed = false;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > 200) {
            navbar.classList.add('fixed-navbar', 'showing' , 'bg-nav-fix'); 
            isFixed = true;
        } else {
            navbar.classList.remove('fixed-navbar', 'showing' , 'bg-nav-fix'); 
            isFixed = false;
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const navbarCollapse = document.querySelector('.custom-collapse');
    const navbarTogglers = document.querySelectorAll('.custom-navbar-toggler');
    
    navbarTogglers.forEach(toggler => {
        toggler.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('open')) {
                navbarCollapse.classList.remove('open');
                closeIcon.style.display = 'none';
                menuIcon.style.display = 'block';
            } else {
                navbarCollapse.classList.add('open');
                menuIcon.style.display = 'none';
                closeIcon.style.display = 'block';
            }
        });
    });
});
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-tab");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.classList.add("active-tab");
    document.querySelector(".kbc-loc--name").textContent = evt.currentTarget.textContent;
    var locNameElement = document.querySelector(".kbc-loc--name");
    if (locNameElement) {
        locNameElement.textContent = evt.currentTarget.textContent;
    } else {
        console.error("Element with class .kbc-loc--name not found.");
    }
    
    document.querySelector(".locat-info-button-top.tab2 .info-butoon-top").textContent = cityName;
}


// function openCity(evt, cityName-2) {
//     var i, tabcontent-2, tablinks-2;
//     tabcontent-2 = document.getElementsByClassName("tabcontent-2");
//     for (i = 0; i < tabcontent-2.length; i++) {
//       tabcontent-2[i].style.display = "none";
//     }
//     tablinks-2 = document.getElementsByClassName("tablinks-2");
//     for (i = 0; i < tablinks-2.length; i++) {
//       tablinks-2[i].className = tablinks-2[i].className.replace(" active-2", "");
//     }
//     document.getElementById(cityName-2).style.display = "block";
//     evt.currentTarget.className += " active-2";
//   }
