import { createPlan } from './plan.js'
import { usePlants } from './field.js'
import { plantSeeds } from './tractor.js'
import { harvestPlants } from './harvester.js'
import { Catalog } from './catalogs.js'


const yearlyPlan = createPlan()
console.log(yearlyPlan)

console.log("Welcome to the main module")

// const cornObj =  createCorn()
// addPlant(cornObj)
// const allPlants = usePlants()
// console.log(allPlants)

// const wheatObj = createWheat()
// addPlant(wheatObj)
// const allPlants = usePlants()
// console.log(allPlants)


plantSeeds(yearlyPlan)
const allPlants = usePlants()
console.log(allPlants)

// const corn = createCorn()
// addPlant(corn)
// const allPlants = usePlants()
// console.log(allPlants)

const allFood = harvestPlants(allPlants)
console.log(allFood)

const catalogString = Catalog(allFood)
const HTMLElement = document.querySelector(".container")
HTMLElement.innerHTML = catalogString
