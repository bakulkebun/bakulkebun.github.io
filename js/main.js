const contactButton = document.getElementById("contactButtonId");
const contactGreeting = "Hallo,%20saya%20mau%20bertanya%20mengenai%20produk%20dari%20Bakul%20Kebun";
const contactNumber = "628113023262";

gsap.registerPlugin(ScrollTrigger);

//open whatsapp for general queries
contactButton.addEventListener('click', () => {
    window.open(`https://api.whatsapp.com/send?phone=${contactNumber}&text=${contactGreeting}`, '_blank');
})

////////////// BUTTONS SETUP
const orderLemonButton = document.getElementById("orderLemon");
const orderDekoponButton = document.getElementById("orderDekopon");
const orderAvocadoButton = document.getElementById("orderAvocado");
const avocadoSession = [8, 9, 10, 11, 12, 1, 2]
var currentDate = new Date();

orderLemonButton.addEventListener("click", async () => {
})



disableButton(orderDekoponButton);

if (!isAvocadoInSession()) {
    disableButton(orderAvocadoButton);
}
else {
    disableButton(orderAvocadoButton, false);
}


///// FUNCTIONS ////////////////////////////////////////////////

function disableButton(btn, status = true) {
    if (status) {
        btn.classList.add("disabledButton");
        btn.textContent = "belum dapat dipesan";
    }
    else {
        btn.classList.remove("disableButton");
        btn.textContent = "Pesan Sekarang";
    }

}

function isAvocadoInSession() {
    if (avocadoSession.indexOf(currentDate.getMonth()) > 0) {
        return true;
    }
    else {
        return false;
    }
}

////// BACKGROUND IMAGE ANIMATION ///////////////////////////
const bgArea = document.querySelectorAll(".backgroundLayer")[0];
const products = document.querySelectorAll(".productContainer");
const lemonTree = document.querySelector("#lemonTree");


///// CREATE BG ELEMENT //////////////////////////
const bgImage = new Array();

lemonTree.classList.add("bgImage");

//some register to console
const topFromCtrFactor = 0.2;
const bgImgMaxHeightFactor = 1-0.2;

const lemonLeaf = document.querySelectorAll(".lemonLeaf");


const lemonVB = lemonTree.viewBox.baseVal;
const lemonVBRatio = lemonVB.width / lemonVB.height;
const lemonCtrHeight = products[0].offsetHeight;
const lemonTreeMaxHeight = lemonCtrHeight * bgImgMaxHeightFactor;
const lemonTreeWidth = lemonTreeMaxHeight * lemonVBRatio;

lemonTree.style.top = products[0].offsetTop + lemonCtrHeight * topFromCtrFactor;
console.log(lemonTree.style.top);

let tlLemon = gsap.timeline({
    scrollTrigger:{
        trigger: products[0],
        //markers:true,
        start:'top center',
        end:'bottom center',
        toggleActions:'restart reverse restart reverse'
    }
});


tlLemon.to(lemonTree,{
    duration:2,
    width:lemonTreeWidth,
    ease:'power1.out'
});

tlLemon.to(".lemonLeaf",{
    duration:0.25,
    opacity:100,
    ease:'bounce',
    stagger:0.15
});

tlLemon.to(".lemonFruit",{
    duration:0.25,
    opacity:100,
    ease:"elastic",
    stagger:0.25
},
"-=0.75");

const orangeTree = document.querySelector("#orangeTree");
const orangeVB = orangeTree.viewBox.baseVal;
const orangeVBRatio = orangeVB.width / orangeVB.height;
const orangeCtrHeight = products[1].offsetHeight;
const orangeTreeMaxHeight = orangeCtrHeight * bgImgMaxHeightFactor;
const orangeTreeWidth = orangeTreeMaxHeight * orangeVBRatio;

orangeTree.classList.add("bgImage");

orangeTree.style.top = products[1].offsetTop + orangeCtrHeight * topFromCtrFactor;
orangeTree.style.right=0;
console.log(orangeTree.style.top);

let tlOrange = gsap.timeline({
    scrollTrigger:{
        trigger: products[1],
        //markers:true,
        start:'top center',
        end:'bottom center',
        toggleActions:'restart reverse restart reverse'
    }
});


tlOrange.to(orangeTree,{
    duration:2,
    width:orangeTreeWidth,
    ease:'power1.out'
});

tlOrange.to(".orangeLeaf",{
    duration:0.25,
    opacity:100,
    ease:'bounce',
    stagger:0.15
});

tlOrange.to(".orangeFruit",{
    duration:0.25,
    opacity:100,
    ease:"elastic",
    stagger:0.25
},
"-=0.25"); 

