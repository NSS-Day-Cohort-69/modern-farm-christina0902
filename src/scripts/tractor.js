// based on plan, creates each seed and add to all plants array

import { addPlant, usePlants } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { createCorn } from "./seeds/corn.js"

export const plantSeeds = (plan) => {
     
    for (const row of plan) {
        for (const seed of row) {
            switch (seed) {
                case "Asparagus":
                    const asparagusObj = createAsparagus()
                    addPlant(asparagusObj)
                    break;
                case "Corn":
                    const cornObj = createCorn()
                    addPlant(cornObj)
                    break;
                case "Potato":
                    const potatoObj = createPotato()
                    addPlant(potatoObj)
                    break;
                case "Soybean":
                    const soybeanObj = createSoybean()
                    addPlant(soybeanObj)
                    break;
                case "Sunflower":
                    const sunflowerObj = createSunflower()
                    addPlant(sunflowerObj)
                    break;
                case "Wheat":
                    const wheatObj = createWheat()
                    addPlant(wheatObj)
                    break;
            }
        }
    }
}
