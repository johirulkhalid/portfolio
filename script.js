const menuBtn = document.getElementById('menu-btn');
const colorBtn = document.getElementById('color-btn');
const searchBtn = document.getElementById('search-btn');
const themeBtn = document.getElementById('theme-btn');

const navber = document.querySelector('.navber');
const searchForm = document.querySelector('.search-form');
const colorsPalatte = document.querySelector('.colors-paletter');

menuBtn.onclick = () =>{
    navber.classList.toggle('active');
    colorsPalatte.classList.remove('active');
    searchForm.classList.remove('active');
}
colorBtn.onclick = () =>{
    colorsPalatte.classList.toggle('active');
    navber.classList.remove('active');
    searchForm.classList.remove('active');
}
searchBtn.onclick = ()=>{
    searchForm.classList.toggle('active');
    navber.classList.remove('active');
    colorsPalatte.classList.remove('active');
}
window.onscroll = ()=>{
    navber.classList.remove('active');
    colorsPalatte.classList.remove('active');
    searchForm.classList.remove('active');
}

document.querySelectorAll('.colors-paletter .color').forEach(btn =>{
    btn.onclick = ()=>{
        let color = btn.style.background;
        document.querySelector(':root').style.setProperty('--main-color', color);
    }
});

themeBtn.onclick = ()=>{
    themeBtn.classList.toggle('uil-sun');
    if(themeBtn.classList.contains('uil-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }

}
