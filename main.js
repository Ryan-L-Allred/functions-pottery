const buyClay = () => {
    const potteryObject = {}
    return potteryObject
}
const clay = buyClay()

const makePottery = (newPotteryObject) => {
    newPotteryObject.shape = "Bowl"
    return newPotteryObject
}
const potteryBowl = makePottery(clay)
//console.log(potteryBowl)

const bisqueFire = (potteryObject) => {
         potteryObject.readyForGlazing = true
         return potteryObject
 }
const readyToGlazeBowl = bisqueFire(potteryBowl)

const glazePottery = (potteryObject) => {
          if (potteryObject.readyForGlazing === true) {
              potteryObject.glazing = "Midnight Blue"
              return potteryObject
      } else {
        console.log("Make sure you bisque fire the pottery before you glaze it.")
      }
  }
    const glazedBowl = glazePottery(readyToGlazeBowl)

const finalFiring = (firedObject, temperature) => {
        if (temperature > 1200) {
            firedObject.cracked = true
        } else if (temperature <= 1200) {
            firedObject.cracked = false
        }
        return firedObject
}
const firedPottery = finalFiring(glazedBowl, 1300)
console.log(firedPottery)