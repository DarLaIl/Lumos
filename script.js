const sum = document.querySelectorAll("#sum");


const plusBtns = document.querySelectorAll(".plus");
const minusBtns = document.querySelectorAll(".minus");
let totalItems = document.querySelectorAll(".totalItems");
let price = document.querySelectorAll(".itemPriceValue");
const cards = document.querySelectorAll(".candle");
let itemPrice;
let totalQ;

plusBtns.forEach((plusBtn,index) => {
    plusBtn.addEventListener("click", (e) => {
        e.preventDefault();
        totalItems[index].value++;
        totalQ = +totalItems[index].value;
    })
    
})
minusBtns.forEach((minusBtn,index) => {
    minusBtn.addEventListener("click", (e) => {
        e.preventDefault();
        totalItems[index].value--;
        if (totalItems[index].value < 1) {
            totalItems[index].value = 1;
        }
        totalQ = +totalItems[index].value;
    })
    
})

sum.forEach((sumIt,num) => {

    sumIt.addEventListener("click", (e) =>{

        e.preventDefault();
        itemPrice = 0;
        const expenses = cards[num].querySelectorAll('.expenses');       
            
        for (let i = 0; i < expenses.length; i++) {
            itemPrice += +expenses[i].value; 
            
        }
        price[num].textContent = (+price[num].textContent + itemPrice) * totalQ;
    });
})

const orders = document.querySelectorAll("#order");
orders.forEach((order,numOrders) => {
    order.addEventListener("click", (e) => {
        e.preventDefault();

        Swal.fire({
            title: 'Спасибо!',
            text: 'Мы получили ваш заказ!',
            imageUrl: 'https://marketplace.canva.com/EAFBAXTwf28/1/0/1600w/canva-beige-organic-shape-for-thank-you-landscape-cards-fAj8euKTTJg.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })

        price[numOrders].textContent = (+price[numOrders].textContent / totalQ) - ( itemPrice);

        document.querySelectorAll(".candle")[numOrders].reset();
        itemPrice = 0;
        totalQ = 1;
    })
    
})

const optRequest = document.querySelector(".optRequest");

    optRequest.addEventListener("click", (e) =>{
        e.preventDefault();

        Swal.fire({
            title: 'Спасибо!',
            text: 'Мы получили ваш запрос!',
            imageUrl: 'https://marketplace.canva.com/EAFBAXTwf28/1/0/1600w/canva-beige-organic-shape-for-thank-you-landscape-cards-fAj8euKTTJg.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
        document.querySelector(".classFour").reset();
    })
