import toast from "react-hot-toast"
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
const getStoredWishList = () => {
    const storedProductList = localStorage.getItem('wish-list');
    if (storedProductList) {
        try {
            const products = JSON.parse(storedProductList)
            return products
        } catch (error) {
            console.error("Failed to parse wish-list from localStorage:", error)
            localStorage.removeItem('wish-list')
            return []
        }
    } else {
        return [];
    }
};



//add to local storage
const addToCart = (product) =>{
    // console.log(product);
    const products = getStoredProductList()
    const isExists = products.find(item=> item.product_id === product.product_id)
    if (isExists) {
        toast.error('This product is already in your cart!');

    }
    else{
        toast.success('Product successfully added to your cart!')
        products.push(product)
        localStorage.setItem('product-list', JSON.stringify(products))
    }
}



const removeCart=(id)=>{
// console.log(id);
    const cart = getStoredProductList()
    const remaining = cart.filter(product=> product.product_id != parseInt(id))
    localStorage.setItem('product-list', JSON.stringify(remaining))
    toast.success('Item removed from the cart successfully!')



}

const addToWishlist = product =>{
    // console.log(product);
    const wish = getStoredWishList()
    const isExists = wish.find(item=> item.product_id === product.product_id)
    if (isExists) {
        toast.error('You have already added this item! Check your wishlist!');


    }
    else{
        toast.success('Success! Your item is now in the wishlist.')


        wish.push(product)
        localStorage.setItem('wish-list', JSON.stringify(wish))
    }
}


const removeWishlist = id =>{
    // console.log(typeof id);
    const wishlist = getStoredWishList()
    const remaining = wishlist.filter(product=> product.product_id != id)
    console.log(remaining);
    localStorage.setItem('wish-list', JSON.stringify(remaining))
    toast.success('Item removed from the wishlist successfully!')

    

}



export {addToCart, getStoredProductList, removeCart, addToWishlist, getStoredWishList, removeWishlist}