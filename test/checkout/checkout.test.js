import CheckoutService from '../../main/checkout/checkout.service'
import ApiPaymentStub from './api.payment.stub'
import CreditCard from '../../main/checkout/credit.card'
import ApiStatus from '../../main/checkout/api.status';
import ApiPaymentValidationStub from './api.payment.validation.stub'
import Product from '../../main/checkout/product';

test('givenProductListWhenThisIsEmptyThenResponseIs504', () => {

    let service = new CheckoutService()

    var products = []

    let api = new ApiPaymentStub()

    let response = service.checkout(products, new CreditCard(0.03), api);

    expect(ApiStatus.AMOUNT_INVALID).toBe(response.code)

});

test('givenProductListWhenCreditCardTaxIsZeroThenResponseIs504', () => {

    let service = new CheckoutService();

    var products = []

    let api = new ApiPaymentStub()

    let response = service.checkout(products, new CreditCard(0), api);

    expect(ApiStatus.AMOUNT_INVALID).toBe(response.code)

});

test('givenProductListWhenThisIsCorrectButOutOfMoneyThenResponseIs503', () => {

    let service = new CheckoutService();

    var products = []

    let api = new ApiPaymentValidationStub(ApiStatus.OUT_OF_MONEY);

    let response = service.checkout(products, new CreditCard(0.03), api);

    expect(ApiStatus.OUT_OF_MONEY).toBe(response.code)

});

test('givenProductListWhenThisIsCorrectButCardNotValidThenResponseIs502', () => {

    let service = new CheckoutService();

    var products = []

    let api = new ApiPaymentValidationStub(ApiStatus.CARD_NOT_VALID);

    let response = service.checkout(products, new CreditCard(0.03), api);

    expect(ApiStatus.CARD_NOT_VALID).toBe(response.code)
});

test('shouldReturnSuccessWhenCheckoutIsOk', () => {

    let service = new CheckoutService();

    var products = []

    products.push(new Product('LK89232', 500))
    products.push(new Product('LK89233', 500))

    let api = new ApiPaymentStub()

    let response = service.checkout(products, new CreditCard(0.03), api);

    expect(ApiStatus.SUCCESS).toBe(response.code)

});