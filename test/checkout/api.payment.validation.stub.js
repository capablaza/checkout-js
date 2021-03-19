import ApiResponse from "../../main/checkout/api.response";

export default class ApiPaymentValidationStub { 
    constructor(code){
        this.code = code
    }
    transfer(amountToPay, card) {
        return new ApiResponse(this.code,"");
    }

 }