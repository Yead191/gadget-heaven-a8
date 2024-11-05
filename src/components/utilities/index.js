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
const getStoredWishList = ()=>{
    const storedProductList = localStorage.getItem('wish-list')
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



const removeCart=(id)=>{
// console.log(id);
    const cart = getStoredProductList()
    const remaining = cart.filter(product=> product.product_id != parseInt(id))
    localStorage.setItem('product-list', JSON.stringify(remaining))


}

const addToWishlist = product =>{
    console.log(product);
    const wish = getStoredWishList()
    const isExists = wish.find(item=> item.product_id === product.product_id)
    if (isExists) {
        alert('mal ta already available')

    }
    else{
        wish.push(product)
        localStorage.setItem('wish-list', JSON.stringify(wish))
    }
}




export {addToCart, getStoredProductList, removeCart, addToWishlist}