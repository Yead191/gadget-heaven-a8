//get from local storage
const getStoredProductList = ()=>{
    const storedProductList = localStorage.getItem('product-list')
    if (storedProductList) {
        const products = JSON.parse(storedProductList)
        return products
        
    }
    else{
        return []
    }
}




//add to local storage
const addToCart = (product) =>{
    // console.log(product);
    const products = getStoredProductList()
    const isExists = products.find(item=> item.product_id === product.product_id)
    if (isExists) {
        alert('mal already available')
    }
    else{
        products.push(product)
        localStorage.setItem('product-list', JSON.stringify(products))
    }
}

export {addToCart, getStoredProductList}