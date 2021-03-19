import ApiStatus from "../../main/checkout/api.status"
import ApiResponse from '../../main/checkout/api.response'


export default class ApiPaymentStub { 
    transfer(amountToPay, card) {
        if(amountToPay <= 0 ){
            return new ApiResponse(ApiStatus.AMOUNT_INVALID, "The amount is not valid");
        }
        return new ApiResponse(ApiStatus.SUCCESS, "the payment was success");
    }
 }