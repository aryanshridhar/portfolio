// NAVABAR 

links = document.getElementsByClassName('nav-link');
navbar = document.getElementsByClassName('navbar-toggler')[0];
divopen = document.getElementsByClassName('navbar-collapse')[0];

function toggle(){
    if(navbar.attributes[0].value = 'navbar-toggler'){
        navbar.attributes[0].value = 'navbar-toggler collapsed';
        navbar.attributes[5].value = 'false';
        divopen.attributes[0].value = 'navbar-collapse collapse';
    }
}

// IMAGE 

// images = document.getElementsByClassName('pic');
// for(i in images){
//     if(images[i].width < 221){
//         images[i].classList.remove('img-responsive');
//         console.log(images[i].classList);
//         console.log(images[i].width)
//         images[i].width = 220;
//     }
// }