/* Nav Mobile */
let navMobile=document.getElementById('navMobile');
function openNav(){
    navMobile.classList.add('navActive');
}
function closeNav(){
    navMobile.classList.remove('navActive');
}

/* Slider */
let wrapSlider=document.getElementById('wrapSlider');
let itemsSlider=document.querySelectorAll('.itemSlider');

let lastSlider=itemsSlider[itemsSlider.length-1]
wrapSlider.insertAdjacentElement('afterbegin',lastSlider)

function next(){
    let firsItem=document.querySelectorAll('.itemSlider')[0];
    wrapSlider.style.marginLeft='-200vw';
    wrapSlider.style.transition='.4s';
    setTimeout(()=>{
        wrapSlider.style.transition='none';
        wrapSlider.insertAdjacentElement('beforeend',firsItem);
        wrapSlider.style.marginLeft='-100vw';
    },400)
};

function prev(){
    let Items=document.querySelectorAll('.itemSlider');
    let lasItem=Items[Items.length-1]
    wrapSlider.style.marginLeft='0';
    wrapSlider.style.transition='.4s';
    setTimeout(()=>{
        wrapSlider.style.transition='none';
        wrapSlider.insertAdjacentElement('afterbegin',lasItem);
        wrapSlider.style.marginLeft='-100vw';
    },400)
}

