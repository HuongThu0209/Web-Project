//import swal from "sweetalert"


//------------- khởi chạy -------------------
if (document.readyState == 'loading') 
{
    document.addEventListener('DOMContentLoaded', ready)
} 
else 
{
    ready()
}
//----------------- khai báo biến xóa cart ------------------
function ready() 
{
    var removeCart = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCart.length; i++) 
    {
        var button = removeCart[i]
        button.addEventListener('click', removeCartItem) // 37
    }
//------------- khai báo biến thay đổi số lượng sp ----------------
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) 
    {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged) // 44
    }
//----------------- khai báo biến khi click vào buy ----------------
    var addToCartButtons = document.getElementsByClassName('btn-cart')
    for (var i = 0; i < addToCartButtons.length; i++) 
    {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked) // 54
    }
}
//-------------------- xóa cart ----------------------------
function removeCartItem(event) 
{ // 17
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}
//------------------- thay đổi số lượng sp ------------------------
function quantityChanged(event) 
{ // 24
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) 
    {
        input.value = 1
    }
    updateCartTotal()
}
//----- lấy thông tin title, img, price để hiển thi vào modal----------
function addToCartClicked(event) 
{ // 31
    var button = event.target
    var boxProduct = button.parentElement.parentElement
    var title = boxProduct.getElementsByClassName('title-product')[0].innerText
    var price = boxProduct.getElementsByClassName('money')[0].innerText
    var imageSrc = boxProduct.parentElement.getElementsByClassName('img-prd')[0].src
    addItemToCart(title, price, imageSrc)
    swal("Good !", "Sản phẩm đã được thêm vào giỏ hàng!", "success");
    updateCartTotal()
}
//--------------- tạo khung để add sp buy vào modal ------------------
function addItemToCart(title, price, imageSrc) 
{
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) 
    {
        if (cartItemNames[i].innerText == title) 
        {
            alert('Sản phẩm này đã có trong giỏ hàng')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">Xóa</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}
//----------------- update cart , tính tổng tiền ----------------------
function updateCartTotal() 
{
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) 
    {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText)
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }

    document.getElementsByClassName('cart-total-price')[0].innerText = total + " " + 'VNĐ'
}

//import swal from "sweetalert"
