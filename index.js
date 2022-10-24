const menuBar = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggle = document.querySelector(".theme-toggle");


menuBtn.addEventListener('click', () =>{
    menuBar.style.display = 'block';
})

closeBtn.addEventListener('click', () =>{
    menuBar.style.display = 'none';
})

themeToggle.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme-var');
    themeToggle.querySelector("span:nth-child(1)").classList.toggle('active');
    themeToggle.querySelector("span:nth-child(2)").classList.toggle('active');
})