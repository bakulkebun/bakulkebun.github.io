const contactButton = document.getElementById("contactButtonId");
const contactGreeting = "Hallo,%20saya%20mau%20bertanya%20mengenai%20produk%20dari%20Bakul%20Kebun";
const contactNumber = "628113023262";

//open whatsapp for general queries
contactButton.addEventListener('click',()=>{
    window.open(`https://api.whatsapp.com/send?phone=${contactNumber}&text=${contactGreeting}`,'_blank');
})

////////////// BUTTONS SETUP
const orderLemonButton = document.getElementById("orderLemon");
const orderDekoponButton = document.getElementById("orderDekopon");
const orderAvocadoButton = document.getElementById("orderAvocado");
const avocadoSession = [8,9,10,11,12,1,2]
var currentDate = new Date();

orderLemonButton.addEventListener("click", async ()=> {
})



disableButton(orderDekoponButton);

if(!isAvocadoInSession()){
    disableButton(orderAvocadoButton);
}
else{
    disableButton(orderAvocadoButton,false);
}

console.log(isAvocadoInSession());

///// FUNCTIONS ////////////////////////////////////////////////

function disableButton(btn, status=true) {
    if(status){
        btn.classList.add("disabledButton");
        btn.textContent = "belum dapat dipesan";
    }
    else{
        btn.classList.remove("disableButton");
        btn.textContent = "Pesan Sekarang";
    }
    
}

function isAvocadoInSession() {
   if(avocadoSession.indexOf(currentDate.getMonth())>0){
        return true;
    }
    else{
        return false;
    }
}

