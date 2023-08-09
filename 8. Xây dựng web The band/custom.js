
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-container')
const modalClose = document.querySelector('.js-modal-close')

// Hàm hiện thị modal mua vé (thêm class open vào clas open)
function showBuyTickets(){
    modal.classList.add('open')
}

// Hàm tắt modal mua vé (gỡ bỏ class open vào clas open)
function closeBuyTickets(){
    modal.classList.remove('open')
    
}
// lắng nghe hành vi click vào nút close
modalClose.addEventListener('click', closeBuyTickets)


// lặp qua từng thẻ button buy tickets

for (const buyBtn of buyBtns) {
    // lằng nghe click của người dùng
    buyBtn.addEventListener('click', showBuyTickets )
}

// lắng nghe click và modal để ẩn đi

modal.addEventListener('click',closeBuyTickets)

// cần bỏ nổi bọt ở modal-container để ấn vào không ẩn đi
modalContainer.addEventListener('click', function(event) {
    event.stopPropagation()

})

