const search = () => {
  const searchValue = document.getElementById('search-item').value.toUpperCase()
  const productList = document.querySelectorAll('.product')

  for (let i = 0; i < productList.length; i++) {
    let productNameElement = productList[i].getElementsByTagName('h2')[0]

    if (productNameElement) {
      let productName = productNameElement.innerHTML
      
      if (productName.toUpperCase().indexOf(searchValue) > -1) {
        productList[i].style.display = ''
      } else {
        productList[i].style.display = 'none'
      }
    }
  }
}
