/* Memory Cost Global Function */
productInfo = () =>{

}
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

// productInfo = (inputID) => {
//
//     // let memory =;
//     // let storage = price;
//     // let delivery = price;
//
//     let price180
//     let price100
//     let price20
//     let price0
//
//    // console.log('Memory: ', memory)
//
//     if((inputID === 'memory_16gb') || (inputID === 'storage_1tb')){
//         price180 = 180;
//         price180 = parseInt(price180);
//     }
//     if((inputID === 'storage_512gb')){
//         price100 = 100;
//         price100 = parseInt(price100);
//     }
//     if((inputID === 'delivery_charge')){
//         price20 = 20;
//     }else{
//         price0 = 0;
//     }
//
//     let subTotal = price180 + price100
//     console.log('Subtotal: ', subTotal)
//     // if(inputID === 'memory_8gb'){
//     //     memory = 0
//     //     memory = parseInt(memory);
//     //     console.log('Memory 8 Gb: ', memory)
//     // }else if(inputID === 'memory_16gb'){
//     //     memory = 180
//     //     memory = parseInt(memory);
//     //     console.log('Memory 16 Gb: ', memory)
//     // }
//     // if(inputID === 'storage_256gb'){
//     //     storage = 0;
//     //     storage = parseInt(storage);
//     //     console.log('Storage 256 Gb: ', storage)
//     // }else if(inputID === 'storage_512gb'){
//     //     storage = 100;
//     //     storage = parseInt(storage);
//     //     console.log('Storage 512 Gb: ', storage)
//     // }else if(inputID === 'storage_1tb'){
//     //     storage = 180;
//     //     storage = parseInt(storage);
//     //     console.log('Storage 1 TB: ', storage)
//     // }
//     // if(inputID === 'delivery_free'){
//     //     delivery = 0;
//     //     delivery = parseInt(delivery);
//     //     console.log('Delivery free: ', delivery)
//     // }else {
//     //     delivery = 20;
//     //     delivery = parseInt(delivery);
//     //     console.log('Delivery Charge: ', delivery)
//     // }
//    // // let subTotal = delivery;
//    //  let memoryCost = memory;
//    //  let storageCost = storage
//
// }

memoryCost = (inputID) =>{
    let memory
    if(inputID === 'memory_16gb'){
        memory = 180
        document.getElementById('extraMemory').innerText = memory;
        console.log('Memory 8 Gb: ', memory)
    }else {
        memory = 0;
        document.getElementById('extraMemory').innerText = memory;
        console.log('Memory 8 Gb: ', memory)
    }
    return memory;
}

storageCost = (inputID) =>{
    let storage
    if(inputID === 'storage_1tb'){
        storage = 180
        document.getElementById('extraStorage').innerText = storage;
        console.log('storage 1 TB: ', storage)
    }else if (inputID === 'storage_512gb'){
        storage = 100
        document.getElementById('extraStorage').innerText = storage;
        console.log('storage 512GB: ', storage)
    }else{
        storage = 0
        document.getElementById('extraStorage').innerText = storage;
        console.log('storage 256GB: ', storage)
    }
    return storage;
}

deliveryCost = (inputID) => {
    let delivery
    if(inputID === 'delivery_charge'){
        delivery = 20
        document.getElementById('deliveryCharge').innerText = delivery;
        console.log('delivery Charge: ', delivery)
    }else{
        delivery = 0
        document.getElementById('deliveryCharge').innerText = delivery;
        console.log('Delivery Free: ', delivery)
    }
    return delivery;
}



productInfo = (inputID) =>{
    const memorySubCost = memoryCost(inputID);
    const storageSubCost = storageCost(inputID);
    const deliverySubCost = deliveryCost(inputID);
    console.log('Memory SubCost: ', memorySubCost)
    console.log('Storage SubCost: ', storageSubCost)
    console.log('Delivery SubCost: ', deliverySubCost)
    const subTotal = memorySubCost + storageSubCost + deliverySubCost;
    console.log('SubTotal: ', subTotal)

}


document.getElementById('memory_8gb').addEventListener('click', () =>{
    productInfo ('memory_8gb')
} )

document.getElementById('memory_16gb').addEventListener('click', () =>{
    productInfo ('memory_16gb')
} )

document.getElementById('storage_256gb').addEventListener('click', () =>{
    productInfo ('storage_256gb')
} )

document.getElementById('storage_512gb').addEventListener('click', () =>{
    productInfo ('storage_512gb')
} )

document.getElementById('storage_1tb').addEventListener('click', () =>{
    productInfo ('storage_1tb')
} )

document.getElementById('delivery_free').addEventListener('click', () =>{
    productInfo ('delivery_free')
} )

document.getElementById('delivery_charge').addEventListener('click', () =>{
    productInfo ('delivery_charge')
} )