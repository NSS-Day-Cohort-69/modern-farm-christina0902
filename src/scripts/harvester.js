// returns an array of all the seed objects
// plants that are now food

export const harvestPlants = (alLPlantsArr) => {
const collectedHarvest = []

for (const seed of alLPlantsArr) {
    let outputValue = seed.output

    if (seed.type === "Corn") {
        outputValue = seed.output / 2
    }

    for (let i = 0; i < outputValue; i++) {

        collectedHarvest.push(seed)

    }

}

return collectedHarvest

}
