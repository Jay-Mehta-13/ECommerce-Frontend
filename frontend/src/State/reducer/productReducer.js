import { GETPRODUCTS } from "../../const"

export let productreducer=(state={products:null,appliance:null,grocery:null,clothing:null},action)=>{
    switch (action.type) {
        case GETPRODUCTS:
            console.log(action.payload);
            let tempappliance=[];
            let tempgrocery=[];
            let tempclothing=[];
            for (const iterator of action.payload) {
                switch (iterator.productCategory) {
                    case "appliance":
                        tempappliance.push(iterator)
                        break;
                    case "grocery":
                        tempgrocery.push(iterator)
                        break;
                    case "clothing":
                        tempclothing.push(iterator)
                        break;
                    default:
                        break;
                }
            }
            return {...state,products:action.payload,appliance:tempappliance,grocery:tempgrocery,clothing:tempclothing}
    
        default:
            return {...state}
    }
}