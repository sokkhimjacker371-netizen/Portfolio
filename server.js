function getProduct(){
    return new Promise((resolve, reject) => {
        // Simulate an API call
        setTimeout(() => {
            const product = { 
                productid: 1, 
                productname: "Coca Cola",
                price: 1.99,
                quantity: 100,
                description: "A refreshing soft drink.",
            }
            resolve(product);
        }, 1000);
    });
}
async function DisplayProduct() {
    try {
        console.log("loading product information...");
        const listProduct = await getProduct();
        const amount = listProduct.price * listProduct.quantity;
        console.log("==================Product Information=======================")
        console.log("Product ID      :", listProduct.productid);
        console.log("Product Name    :", listProduct.productname);
        console.log("Product Price   : $", listProduct.price.toFixed(2));
        console.log("Product Quantity:", listProduct.quantity);
        console.log("Description     :", listProduct.description);
        console.log("Total Amount    : $", amount.toFixed(2));
        console.log("========================== END =============================")
    } catch (error) {
        console.error("Error fetching product:", error);
    }

}
DisplayProduct();