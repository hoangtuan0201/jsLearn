// String(25) converts number to string
// Number('25')) converts string to number
console.log('25'-5);
console.log('25'+5); // always do math using **numnber**
window.document


function listenEnter(event) {
    if (event.key ==='Enter') { // event should be parameter in function call
        calculateTotal();
    }
}
function calculateTotal() {
    const costInput = document.querySelector('.js-cost-input');
    let cost = Number(costInput.value);
    if (cost <40) {
        cost = Math.round(((cost+10)*100))/100;
        document.querySelector('.total-cost').innerHTML = `$${cost}`
    }else {
        document.querySelector('.total-cost').innerHTML =`$${cost} and FREE SHIPPING`;
    }
}
function subscribe() {
    const buttonElement = document.querySelector('.subscribe');
    if (buttonElement.innerHTML === 'Subscribe') {
        buttonElement.innerHTML = 'Subscribed';
        buttonElement.classList.add('is-subscribed');
    }else {
        buttonElement.innerHTML = 'Subscribe'
        buttonElement.classList.remove('is-subscribed');
    }
}