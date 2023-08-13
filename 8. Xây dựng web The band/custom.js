
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


/////////////////// MOBILE - MENU //////////////////////////

var header = document.getElementById("header")

var mobileMenu = document.getElementById('mobile-menu')

// lưu css header height bằng 1 biến
var headerHeigth = header.clientHeight;

//____ Lắng nghe click vào mobileMenu ____________//
mobileMenu.onclick = function(){

    // so sánh biến = 46 hay không trả về T hay F _____//
    var isCLose = header.clientHeight === headerHeigth;
    if (isCLose) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;

    }
}


// Tự động đóng khi chọn menu_____//

var menuItems = document.querySelectorAll('#nav li a[href*="#"]');

// lắng nghe click vào thẻ a để đóng menu và chuyển đến đó

for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    menuItem.onclick = function (event) {
        
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(!isParentMenu) {
            header.style.height = null;

        } else {
            event.preventDefault();
            // Bỏ việc trôi trang khi nhấn vào
        }
    }
}

