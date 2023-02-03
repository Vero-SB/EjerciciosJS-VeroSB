/**
 * 5 + 2 == 7
 * 5 - 2 == 3
 * 5 * 2 == 10
 * 5 / 2 == 2.5
 * 5 ** 2 == 25 (exponencial/al cuadrado)
 * 5 % 2 = 1 <- modulus operator: 5 / 2 = 2 and 1 remains (resto dunha división)
 * 
 * Exercise:
 * - Assign to VATRatio the value os VATPergentage divided by 100.
 * - Assign to VATValue the value of productPrize multiplied by VATRatio.
 * - Declare a variable named "total" and assign to it the
 *   value of productPrize plus VATValue.
 */

let productPrize = 42
let VATPercentage = 4
let VATRatio
let VATValue

// Write your code here.
VATRatio = VATPercentage / 100;
VATValue = productPrize * VATRatio;
let total = productPrize + VATValue;
/**
 * Don't to change next lines.
 */
module.exports = {
    productPrize,
    VATPercentage,
    VATRatio,
    VATValue,
    total,
}