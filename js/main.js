const contactButton = document.getElementById("contactButtonId");
const contactGreeting = "Hallo,%20saya%20mau%20bertanya%20mengenai%20produk%20dari%20Bakul%20Kebun";
const contactNumber = "628113023262";

//open whatsapp for general queries
contactButton.addEventListener('click',()=>{
    window.open(`https://api.whatsapp.com/send?phone=${contactNumber}&text=${contactGreeting}`,'_blank');
})
