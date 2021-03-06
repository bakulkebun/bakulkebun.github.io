
const contactButton = document.getElementById("contactButtonId");
const contactGreeting = "Hallo,%20saya%20mau%20bertanya%20mengenai%20produk%20dari%20Bakul%20Kebun";
const contactNumber = "628113023262";
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const isMobileScreen = windowWidth < 720 ? true : false;
const isPortrait = windowWidth < windowHeight ? true : false;
console.log(isMobileScreen);


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

    window.open(`https://www.tokopedia.com/frefa/10kg-lemon-california-hijau-jumbo-size-5-7-buah-kg`, '_blank');
});



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

function backgroundAnimate() {
    //COMMON SETUP

    //title location
    const title = document.querySelectorAll(".productTitle");

    //some register to console
    const topFromCtrFactor = 0.2;
    const bgImgMaxHeightFactor = 1 - 0.2;

    ///// CREATE BG ELEMENT //////////////////////////
    const bgImage = new Array();
    const bgArea = document.querySelectorAll(".backgroundLayer")[0];
    const products = document.querySelectorAll(".productContainer");

    //LEMON TREE
    const lemonVB = lemonTree.viewBox.baseVal;
    const lemonVBRatio = lemonVB.width / lemonVB.height;
    const lemonCtrHeight = products[0].offsetHeight;
    const lemonTreeMaxHeight = lemonCtrHeight * bgImgMaxHeightFactor;
    const lemonTreeWidth = lemonTreeMaxHeight * lemonVBRatio;
    lemonTree.style.width = 0;
    lemonTree.classList.add("bgImage");

    //ORANGE TREE
    const orangeVB = orangeTree.viewBox.baseVal;
    const orangeVBRatio = orangeVB.width / orangeVB.height;
    const orangeCtrHeight = products[1].offsetHeight;
    const orangeTreeMaxHeight = orangeCtrHeight * bgImgMaxHeightFactor;
    const orangeTreeWidth = orangeTreeMaxHeight * orangeVBRatio;
    orangeTree.style.width = 0;
    orangeTree.classList.add("bgImage");

    //AVOCADO lemonTree
    const avocadoTree = document.querySelector("#avocadoTree");
    const avocadoVB = avocadoTree.viewBox.baseVal;
    const avocadoVBRatio = avocadoVB.width / avocadoVB.height;
    const avocadoCtrHeight = products[2].offsetHeight;
    const avocadoTreeMaxHeight = avocadoCtrHeight * bgImgMaxHeightFactor;
    const avocadoTreeWidth = avocadoTreeMaxHeight * avocadoVBRatio;
    avocadoTree.style.width = 0;
    avocadoTree.classList.add("bgImage");

    //animate based on the screen size and orientation
    if (isMobileScreen == true) {

        //Animate Lemon
        lemonTree.style.top = title[0].offsetTop + products[0].offsetTop;
        let tlLemon = gsap.timeline({
            scrollTrigger: {
                trigger: title[0],
                start: 'top bottom',
                end: 'top 20%',
                toggleActions: 'restart reverse restart reverse'
            }
        });

        tlLemon.to(lemonTree, {
            duration: 2,
            width: windowWidth,
            ease: 'power1.out'
        });

        tlLemon.to(".lemonLeaf", {
            duration: 0.25,
            opacity: 100,
            ease: 'bounce',
            stagger: 0.15
        }
        );

        tlLemon.to(".lemonFruit", {
            duration: 0.25,
            opacity: 100,
            ease: "elastic",
            stagger: 0.25
        },
            "-=0.75");

        //Animate Orange
        orangeTree.style.top = title[1].offsetTop + products[1].offsetTop;
        orangeTree.style.right = 0;

        let tlOrange = gsap.timeline({
            scrollTrigger: {
                trigger: title[1],
                start: 'top bottom',
                end: 'top 20%',
                toggleActions: 'restart reverse restart reverse'
            }
        });

        tlOrange.to(orangeTree, {
            duration: 2,
            width: windowWidth,
            ease: 'power1.out'
        });

        tlOrange.to(".orangeLeaf", {
            duration: 0.25,
            opacity: 100,
            ease: 'bounce',
            stagger: 0.15
        }
        );

        tlOrange.to(".orangeFruit", {
            duration: 0.25,
            opacity: 100,
            ease: "elastic",
            stagger: 0.25
        },
            "-=0.75");

        //Animate Avocado
        avocadoTree.style.top = title[2].offsetTop + products[2].offsetTop;

        let tlAvocado = gsap.timeline({
            scrollTrigger: {
                trigger: title[2],
                start: 'top bottom',
                end: 'top 20%',
                toggleActions: 'restart reverse restart reverse'
            }
        });

        tlAvocado.to(avocadoTree, {
            duration: 2,
            width: windowWidth,
            ease: 'power1.out'
        });

        tlAvocado.to(".avocadoLeaf", {
            duration: 0.25,
            opacity: 100,
            ease: 'bounce',
            stagger: 0.15
        }
        );

        tlAvocado.to(".avocadoFruitBranch", {
            duration: 0.25,
            opacity: 100,
            ease: 'bounce',
        },
            "-=0.25");

        tlAvocado.to(".avocadoFruit", {
            duration: 0.25,
            opacity: 100,
            ease: "elastic",
            stagger: 0.25
        },
            "-=0.75");
    }
    else {

        //Animate Lemon

        lemonTree.style.top = products[0].offsetTop + lemonCtrHeight * topFromCtrFactor;

        let tlLemon = gsap.timeline({
            scrollTrigger: {
                trigger: products[0],
                //markers:true,
                start: 'top center',
                end: 'bottom center',
                toggleActions: 'restart reverse restart reverse'
            }
        }
        );

        tlLemon.to("#lemonTree", {
            duration: 2,
            width: lemonTreeWidth,
            ease: 'power1.out'
        }
        );

        tlLemon.to(".lemonLeaf", {
            duration: 0.25,
            opacity: 100,
            ease: 'bounce',
            stagger: 0.15
        }
        );

        tlLemon.to(".lemonFruit", {
            duration: 0.25,
            opacity: 100,
            ease: "elastic",
            stagger: 0.25
        },
            "-=0.75");

        //Animate Orange

        orangeTree.style.top = products[1].offsetTop + orangeCtrHeight * topFromCtrFactor;
        orangeTree.style.right = 0;

        let tlOrange = gsap.timeline({
            scrollTrigger: {
                trigger: products[1],
                //markers:true,
                start: 'top center',
                end: 'bottom center',
                toggleActions: 'restart reverse restart reverse'
            }
        }
        );

        tlOrange.to("#orangeTree", {
            duration: 2,
            width: orangeTreeWidth,
            ease: 'power1.out'
        }
        );

        tlOrange.to(".orangeLeaf", {
            duration: 0.25,
            opacity: 100,
            ease: 'bounce',
            stagger: 0.15
        }
        );

        tlOrange.to(".orangeFruit", {
            duration: 0.25,
            opacity: 100,
            ease: "elastic",
            stagger: 0.25
        },
            "-=0.25");

        //Animate Avocado

        avocadoTree.style.top = products[2].offsetTop + avocadoCtrHeight * topFromCtrFactor;
        avocadoTree.style.left = 0;

        let tlAvocado = gsap.timeline({
            scrollTrigger: {
                trigger: products[2],
                //markers:true,
                start: 'top center',
                end: 'bottom center',
                toggleActions: 'restart reverse restart reverse'
            }
        });

        tlAvocado.to(avocadoTree, {
            duration: 2,
            width: avocadoTreeWidth,
            ease: 'power1.out'
        });

        tlAvocado.to(".avocadoLeaf", {
            duration: 0.25,
            opacity: 100,
            ease: 'bounce',
            stagger: 0.15
        });

        tlAvocado.to(".avocadoFruitBranch", {
            duration: 0.25,
            opacity: 100,
            ease: 'bounce',
        },
            "-=0.25");

        tlAvocado.to(".avocadoFruit", {
            duration: 0.25,
            opacity: 100,
            ease: "elastic",
            stagger: 0.25
        },
            "-=0.25");
    }
}

setTimeout(backgroundAnimate(), 2000);

window.addEventListener('resize', backgroundAnimate());

