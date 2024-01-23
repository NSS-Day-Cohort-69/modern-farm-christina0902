// displays all food to user 

export const Catalog = (harvestArr) => {
    let HTMLstring = ""
    for (const food of harvestArr) {
        HTMLstring += `<section class="plant">${food.type}</section>
        `
    }
    return HTMLstring
}