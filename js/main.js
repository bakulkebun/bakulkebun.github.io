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

const tl = new gsap.timeline();

///// CREATE BG ELEMENT //////////////////////////
const bgImage = new Array();

for (i = 1; i < 4; i++) {
    var newImg = document.createElement("img");
    newImg.src = `/assets/bgDecor${i}.png`;
    newImg.classList.add("bgImage");
    if (i % 2 == 0) {
        newImg.style.right = 0;
    }
    else {
        newImg.style.left = 0;
    }
    bgImage.push(newImg);
}


function layoutBg() {
    const bgIndexMax = products.length <= bgImage.length ? products.length : bgImage.length;

    for (i = 0; i < bgIndexMax; i++) {

        var currentProduct = products[i];
        var prodHeight = currentProduct.offsetHeight;
        var prodTop = currentProduct.offsetTop;
        bgImage[i].style.height = (prodHeight) + "px";
        bgImage[i].style.top = prodTop + "px";
        if(i%2==0){
            bgImage[i].style.transformOrigin = "bottom left";
        }
        else{
            bgImage[i].style.transformOrigin ="bottom right";
        }
        bgArea.append(bgImage[i]);

        gsap.from(bgImage[i],{
            duration:2,
            scaleX:0,
            ease:"power1.out",
            scrollTrigger: {
                trigger:products[i],
                start:'top center',
                end:'bottom center',
                toggleActions:"restart reverse restart reverse"
            },
           
        })
    }

}


layoutBg();
window.addEventListener("resize", layoutBg);
