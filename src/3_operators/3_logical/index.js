/**
 * true and false are the data for logical operators.
 * "and" operator:
 * - true && true 👉 true (se teño coche E teño tempo = vou)
 * - false && true 👉 false
 * - true && false 👉 false
 * - false && false 👉 false
 * "or" operator:
 * - true || true 👉 true (se teño coche OU teño tempo = vou)
 * - false || true 👉 true
 * - true || false 👉 true
 * - false || false 👉 false
 * "not" operator: (! operador de negacion)
 * - ! true 👉 false
 * - ! false 👉 true
 * 
 * Example 1:
 * let iAmHungry = true
 * let iHaveDisses = true
 * let iEat = iAmHungry && iHaveDisses
 * 
 * Example 2:
 * let iAmHungry = true
 * let iHaveFood = false
 * let iHaveMoney = true
 * let itsWeekday = true
 * let iEat = iAmHungry && ( iHaveDisses || (iHaveMoney && itsWeekday) ) 
 * (primeiro resolve os && e logo resolve o ||, pero, si o poño entre parentesis primeiro resolve o do parentesis)
 * 
 * Exercise:
 * - Set the variable values to get to go to the beach
 */

let itsSunny = true
let imOnHolidays = true
let iLikeBeach = true
let iSurf = true
let thereAreWaves = true
let beachIsCloseEnough = true
let thereAreNoSharks = true
let iGoToTheBeach = ( 
        (
            itsSunny &&
            imOnHolidays &&
            iLikeBeach &&
            beachIsCloseEnough
        ) || (
            iSurf && thereAreWaves
        )
    ) && thereAreNoSharks

/**
 * Don't to change next lines.
 */
module.exports = { iGoToTheBeach }