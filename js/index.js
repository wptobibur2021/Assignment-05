/* Memory Cost Global Function */
// memoryCost = (inputID) =>{
//     let memory
//     if(inputID === 'memory_8gb'){
//         memory = 0
//         console.log('Memory 8 Gb: ', memory)
//     }else {
//         memory = 180;
//         document.getElementById('extraMemory').innerText = memory;
//         console.log('Memory 16 Gb: ', memory)
//     }
//     return memory;
// }
//
// storageCost = (inputID) =>{
//     let storage
//     if(inputID === 'storage_256gb'){
//         storage = 0
//         console.log('storage_256gb: ', storage)
//     }else if (inputID === 'storage_512gb'){
//         storage = 100
//         document.getElementById('extraStorage').innerText = storage;
//         console.log('storage_512gb: ', storage)
//     }else{
//         storage = 180
//         document.getElementById('extraStorage').innerText = storage;
//         console.log('storage 1TB: ', storage)
//     }
//     return storage;
// }
//
// deliveryCost = (inputID) => {
//     let delivery
//     if(inputID === 'delivery_free'){
//         delivery = 0
//         console.log('delivery Free: ', delivery)
//     }else {
//         delivery = 20
//         console.log('delivery: ', delivery)
//     }
//     return delivery;
// }
//
// const memorySubCost = memoryCost();
// const storageSubCost = storageCost();
// const deliverySubCost = deliveryCost();
// document.getElementById('deliveryCharge').innerText = deliverySubCost;
// const subTotal = memorySubCost + storageSubCost + deliverySubCost;
// console.log('SubTotal: ', subTotal)






/* Global Function Declaration */
let memoryCost;
let storageCost;
let deliveryCost;
let memory ;
let storage ;
let delivery ;
productInfo = (inputID) => {

    // let memory =;
    // let storage = price;
    // let delivery = price;

    // let price180
    // let price100
    // let price20
    // let price0

   // console.log('Memory: ', memory)

    // if((inputID === 'memory_16gb') || (inputID === 'storage_1tb')){
    //     price180 = 180;
    //     price180 = Number(price180);
    //     console.log('Price 180', price180)
    // }
    // if((inputID === 'storage_512gb')){
    //     price100 = 100;
    //     price100 = Number(price100);
    //     console.log('Price 100', price100)
    // }
    // if((inputID === 'delivery_charge')){
    //     price20 = 20;
    // }else{
    //     price0 = 0;
    // }
    //
    // let subTotal = price180 + price100
    // console.log('Subtotal: ', subTotal)

    if(inputID === 'memory_8gb'){
        memory = 0
        memory = parseInt(memory);
        console.log('Memory 8 Gb: ', memory)
        document.getElementById('extraMemory').innerText = memory
    }else if(inputID === 'memory_16gb'){
        memory = 180
        memory = parseInt(memory);
        console.log('Memory 16 Gb: ', memory)
        document.getElementById('extraMemory').innerText = memory
    }
    if(inputID === 'storage_256gb'){
        storage = 0;
        storage = parseInt(storage);
        console.log('Storage 256 Gb: ', storage)
        document.getElementById('extraStorage').innerText=storage
    }else if(inputID === 'storage_512gb'){
        storage = 100;
        storage = parseInt(storage);
        console.log('Storage 512 Gb: ', storage)
        document.getElementById('extraStorage').innerText=storage
    }else if(inputID === 'storage_1tb'){
        storage = 180;
        storage = parseInt(storage);
        console.log('Storage 1 TB: ', storage)
        document.getElementById('extraStorage').innerText=storage
    }
    if(inputID === 'delivery_charge'){
        delivery = 20;
        delivery = parseInt(delivery);
        console.log('Delivery free: ', delivery)
        document.getElementById('deliveryCharge').innerText = delivery
    }else if (inputID === 'delivery_free') {
        delivery = 0;
        delivery = parseInt(delivery);
        console.log('Delivery Charge: ', delivery)
        document.getElementById('deliveryCharge').innerText = delivery
    }
    calculator()
    //let subTotal = Number (subTotalDelivery + subTotalMemory + subTotalStorage);
   // console.log('Subtotal: ', subTotal)
}

// initial the table price
let subTotal;
let extraMemoryCost;
let extraStorageCost
let deliveryCharge
let bestPrice = 1299
// Calculator Function Declaration
calculator = () =>{
    extraMemoryCost = Number (document.getElementById('extraMemory').innerText);
    extraStorageCost = Number (document.getElementById('extraStorage').innerText)
    deliveryCharge = Number (document.getElementById('deliveryCharge').innerText)
    subTotal = extraMemoryCost + bestPrice + extraStorageCost + deliveryCharge
    document.getElementById('subTotal').innerText = subTotal
    document.getElementById('grandTotal').innerText = subTotal
    console.log('All total', subTotal)
    couponApply()
}
// CouponApply
couponApply = () =>{
    const discountInput = document.getElementById('discount')
    const discountValue = discountInput.value
    console.log('Discount', discountInput)
    let discountAmount
    let afterDiscountAmount
    extraMemoryCost = Number (document.getElementById('extraMemory').innerText);
    extraStorageCost = Number (document.getElementById('extraStorage').innerText)
    deliveryCharge = Number (document.getElementById('deliveryCharge').innerText)
    subTotal = extraMemoryCost + bestPrice + extraStorageCost + deliveryCharge
    if(discountValue === "stevekaku"){
        discountAmount = subTotal * 0.2;
        afterDiscountAmount = subTotal - discountAmount
        discountInput.value = ''
        document.getElementById('grandTotal').innerText = afterDiscountAmount
    }else{
        document.getElementById('grandTotal').innerText = subTotal
    }
    console.log('Apply Total', subTotal)
}


// memoryCost = (inputID) =>{
//     let memory
//     if(inputID === 'memory_16gb'){
//         memory = 180
//         document.getElementById('extraMemory').innerText = memory;
//         console.log('Memory 8 Gb: ', memory)
//     }else {
//         memory = 0;
//         document.getElementById('extraMemory').innerText = memory;
//         console.log('Memory 8 Gb: ', memory)
//     }
//     return memory;
// }
//
// storageCost = (inputID) =>{
//     let storage
//     if(inputID === 'storage_1tb'){
//         storage = 180
//         document.getElementById('extraStorage').innerText = storage;
//         console.log('storage 1 TB: ', storage)
//     }else if (inputID === 'storage_512gb'){
//         storage = 100
//         document.getElementById('extraStorage').innerText = storage;
//         console.log('storage 512GB: ', storage)
//     }else{
//         storage = 0
//         document.getElementById('extraStorage').innerText = storage;
//         console.log('storage 256GB: ', storage)
//     }
//     return storage;
// }
//
// deliveryCost = (inputID) => {
//     let delivery
//     if(inputID === 'delivery_charge'){
//         delivery = 20
//         document.getElementById('deliveryCharge').innerText = delivery;
//         console.log('delivery Charge: ', delivery)
//     }else{
//         delivery = 0
//         document.getElementById('deliveryCharge').innerText = delivery;
//         console.log('Delivery Free: ', delivery)
//     }
//     return delivery;
// }
//
//
//
// productInfo = (inputID) =>{
//     const memorySubCost = memoryCost(inputID);
//     const storageSubCost = storageCost(inputID);
//     const deliverySubCost = deliveryCost(inputID);
//     console.log('Memory SubCost: ', memorySubCost)
//     console.log('Storage SubCost: ', storageSubCost)
//     console.log('Delivery SubCost: ', deliverySubCost)
//     const subTotal = memorySubCost + storageSubCost + deliverySubCost;
//     console.log('SubTotal: ', subTotal)
//
// }
//
//
// document.getElementById('memory_8gb').addEventListener('click', () =>{
//     productInfo ('memory_8gb')
// } )
//
// document.getElementById('memory_16gb').addEventListener('click', () =>{
//     productInfo ('memory_16gb')
// } )
//
// document.getElementById('storage_256gb').addEventListener('click', () =>{
//     productInfo ('storage_256gb')
// } )
//
// document.getElementById('storage_512gb').addEventListener('click', () =>{
//     productInfo ('storage_512gb')
// } )
//
// document.getElementById('storage_1tb').addEventListener('click', () =>{
//     productInfo ('storage_1tb')
// } )
//
// document.getElementById('delivery_free').addEventListener('click', () =>{
//     productInfo ('delivery_free')
// } )
//
// document.getElementById('delivery_charge').addEventListener('click', () =>{
//     productInfo ('delivery_charge')
// } )
