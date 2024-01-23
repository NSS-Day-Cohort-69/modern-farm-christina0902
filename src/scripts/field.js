const allPlants = []

// plants that we are planting
// takes each seed object and adds it to array 

export const addPlant = (seed) => {

    if (Array.isArray(seed) === true) {

        for (const obj of seed) {
            allPlants.push(obj)
        }

    } else {

        allPlants.push(seed)
    }
}

// returns array

export const usePlants = () => {
    return allPlants
} 



