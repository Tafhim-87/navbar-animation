let main = document.querySelector(".main");
let cursor = document.querySelector("#cursor");
let imageDiv = document.querySelector('#image')
let body = document.querySelector('body');
let navIcon = document.querySelector('#menu-icon');
let closeIcon = document.querySelector('#close-icon');
let menu = document.querySelector('#menu');
var tl = gsap.timeline();

body.addEventListener("mousemove", (e) => {
    gsap.to(cursor,{
        x:e.x,
        y:e.y,
        opacity:.5,
        duration:.5,
        ease: "expoScale(0.5,7,none)"
    })
})

// nav icon animation to

tl.to(menu,{
    right: 0,
    duration: .5,
})

tl.from('#menu ul li a',{
    x: 150,
    opacity: 0,
    stagger: .1,
    duration: .5,
})

tl.from('#menu i',{
    opacity: 0,
})

tl.pause();

navIcon.addEventListener("click", () => {
    tl.play();
})

closeIcon.addEventListener("click", () => {
    tl.reverse();
})

// finish...
