export default class Summary {

    balance(products) {

        let total = products.reduce(function(acc, curr){
            return acc + curr.amount;
        },0)

        return total
    }
}