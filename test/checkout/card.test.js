import CreditCard from '../../main/checkout/credit.card'
import DebitCard from '../../main/checkout/debit.card'

test('shouldReturn30WhenIsCreditCardAndAmountIs1000', () => {
    let card = new CreditCard(0.03)
    let amount = 1000
    let expected = 30
    let taxes = card.taxes(amount)
    expect(expected).toBe(taxes)
});

test('shouldReturnZeroWithCreditCardAndAmountIsZero', () => {
    let card = new CreditCard(0.03)
    let amount = 0
    let expected = 0
    let taxes = card.taxes(amount)
    expect(expected).toBe(taxes)
});

test('shouldReturnZeroWhenCreditCardTaxIsZero', () => {
    let card = new CreditCard(0)
    let amount = 1000
    let expected = 0
    let taxes = card.taxes(amount)
    expect(expected).toBe(taxes)
});

test('shouldReturn30WhenIsCreditCardAndAmountIs1000', () => {
    let card = new DebitCard(0.03)
    let amount = 1000
    let expected = 30
    let taxes = card.taxes(amount)
    expect(expected).toBe(taxes)
});

test('shouldReturnZeroWithCreditCardAndAmountIsZero', () => {
    let card = new DebitCard(0.03)
    let amount = 0
    let expected = 0
    let taxes = card.taxes(amount)
    expect(expected).toBe(taxes)
});

test('shouldReturnZeroWhenCreditCardTaxIsZero', () => {
    let card = new DebitCard(0)
    let amount = 1000
    let expected = 0
    let taxes = card.taxes(amount)
    expect(expected).toBe(taxes)
});
