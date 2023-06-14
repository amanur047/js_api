const shop ={
    owner:  "amanur",
    address:{
    street: "shah kabir mazar road",
    country: "BD"
},
Products : ['laptop','mic','monitor'], 
revenue : 45000,
isOpen : true,
isNew :false
}

const shopNew = JSON.stringify(shop);

console.log(shopNew)