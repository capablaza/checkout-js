import Product from '../../main/checkout/product'
import Summary from '../../main/checkout/summary'

test('givenTwoProductsWhenBothAvail500ThenBalanceIs1000', () => {
    var products = []

    products.push(new Product('LK89232', 500))
    products.push(new Product('LK89233', 500))

    let expected = 1000
    let summary = new Summary()
    let balance = summary.balance(products)

    expect(expected).toBe(balance)

});

test('shouldReturnZeroWhenListProductIsEmpty', () => {
    var products = []
    let expected = 0;
    let summary = new Summary()
    let balance = summary.balance(products)

    expect(products.length == 0).toBeTruthy()
    expect(expected).toBe(balance)
});

test('shouldReturnZeroWhenBothsProductsHaveValueIdenticalButOpposite', () => {
    var products = []
    products.push(new Product('LK89232', -500))
    products.push(new Product('LK89233', 500))

    let expected = 0
    let summary = new Summary()
    let balance = summary.balance(products)

    expect(expected).toBe(balance)
});

test('givenProductValueIs500WhenProductValueIsNegativeThenReturnBalanceNegative', () => {
    var products = []
    products.push(new Product('LK89232', -1500))
    products.push(new Product('LK89233', 500))

    let expected = -1000
    let summary = new Summary()
    let balance = summary.balance(products)
    
    expect(expected).toBe(balance)

});