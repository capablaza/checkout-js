import ApiStatus from "./api.status";
import Summary from "./summary";
import CheckoutResponse from './checkout.response'

export default class CheckoutService {

    checkout(products, card, api) {
        let summary = new Summary()
        let balance = summary.balance(products);

        let taxes = card.taxes(balance);

        let amountToPay = balance + taxes;

        let response = api.transfer(amountToPay, card);

        if (response.code == ApiStatus.CARD_NOT_VALID) {
            return new CheckoutResponse(ApiStatus.CARD_NOT_VALID, response.message);
        } else if (response.code == ApiStatus.OUT_OF_MONEY) {
            return new CheckoutResponse(ApiStatus.OUT_OF_MONEY, response.message);
        } else if (response.code == ApiStatus.AMOUNT_INVALID) {
            return new CheckoutResponse(ApiStatus.AMOUNT_INVALID, response.message);
        }

        return new CheckoutResponse(ApiStatus.SUCCESS, "payment process successfully");
    }
}