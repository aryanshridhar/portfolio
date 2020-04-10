//WINDOW

$(window).scroll(function () {
    if ($(window).scrollTop() >= window.innerHeight/1.20) {
        $('.navbar').css('background','#26172C');
    } else {
        $('.navbar').css('background','transparent');
    }
});


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

// CLICK

img = document.getElementById('img');
newimg = document.getElementsByClassName('pic')[0];
newimg.style.display = 'none';
figure = document.getElementById('figmargin');
figure.style.marginTop = '20px';

img.addEventListener('click' , function()
{
    img.style.display = 'none';  
    figure.style.marginTop = '20px';
    newimg.style.display = 'block';
})

newimg.addEventListener('click' , function()
{
    newimg.style.display = 'none';
    img.style.display = 'block';  

})