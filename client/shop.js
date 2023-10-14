const formAddProduct = document.querySelector('.form-add-product');
const btnOpenForm = document.querySelector('.btn-open-form');
const btnCLoseForm = document.querySelector('.btn-close-form');
const inpAddProductName = document.querySelector('.inp-add-productName');
const inpAddProductPrice = document.querySelector('.inp-add-productPrice');
const inpAddProductImg = document.querySelector('.inp-add-productImg');
const btnAddProduct = document.querySelector('.btn-add-product');
const outPutProduct = document.querySelector('.out_put_productt');
const apiUrl = 'http://localhost:4000/product';



const addOneProduct = async ( productName, productPrice, productImg ) => {
    try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            productName,
            productPrice,
            productImg
          }),
        });
    
        if (!response.ok) {
          throw new Error('Failed to create the product.');
        }
    
        const createdProduct = await response.json();
    
        // Xử lý kết quả ở đây, ví dụ: hiển thị sản phẩm mới được tạo ra
        console.log('Product created:', createdProduct);
        alert("Thêm product thành công")
        getAllProduct();
      } catch (error) {
        // Xử lý lỗi ở đây
        console.error('Error:', error);
      }
}



const getAllProduct = async () => {
  const response = await fetch(`${apiUrl}`);

  if (response.status === 200) {
    const data = await response.json();
    console.log(47, "Lấy tất cả product thành công:", data);

    const ListProduct = data?.map((value,index) => {
      return
      `
          <div class="col-12 col-md-4 col-lg-3 mb-5" data-id="${value._id}">
            <a class="product-item" href="#">
              <img src="${value.productImg}"
                class="img-fluid product-thumbnail">
              <h3 class="product-title">${value.productName}</h3>
              <strong class="product-price">${value.productPrice}</strong>

              <span class="icon-cross">
                <img src="images/cross.svg" class="img-fluid">
              </span>
            </a>
          </div>
        `;
      })
      outPutProduct.innerHTML = ListProduct.join(" ")
  } else {
    console.log("Lấy tất cả product thất bại:", response.status);
  }
};


getAllProduct()


btnOpenForm.addEventListener("click", () => {
    formAddProduct.setAttribute("style", "display:block")
    btnOpenForm.setAttribute("style", "display:none")
})


btnCLoseForm.addEventListener("click", () => {
    formAddProduct.setAttribute("style", "display:none")
    btnOpenForm.setAttribute("style", "display:block")
})

btnAddProduct.addEventListener("click", () => {
    console.log(inpAddProductName.value);
    console.log(inpAddProductPrice.value);
    console.log(inpAddProductImg.value);
    addOneProduct(inpAddProductName.value, inpAddProductPrice.value, inpAddProductImg.value )
})


