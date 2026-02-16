function didFallAsleep() {
    return Math.random() < 0.3; // Adjust the chance of falling asleep as needed
}
// Mow yard 
function mowYard(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${name} mowed the yard.`);
            resolve(name);
        }, 2000);
    });
}
// weed eat
function weedEat(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (didFallAsleep()) {
                console.log(`${name} finished using the weed eater.`)
                resolve(name);
            } else {
                reject(`${name} fell asleep after mowing the yard.`);
            }
        }, 1500);
});
}
// trim hedges
function trimHegdes(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (didFallAsleep()) {
                console.log(`${name} finished trimming the hedges.`);
                resolve(name);
            } else {
                reject(`${name} fell asleep after weed eating the yard.`);
            }
        }, 1000);
    });
}
// collect wood
function collectWood(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (didFallAsleep()) {
                console.log(`${name} finished collecting wood.`);
                resolve(name);
            } else {
                reject(`${name} fell asleep after trimming the hedges.`);
            }
        }, 2500);
    });
}
// water Garden
function waterGarden(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (didFallAsleep()) {
                console.log(`${name} finished watering the garden.`);
                resolve(name);
            } else {
                reject(`${name} fell asleep after collecting wood.`);
            }
        }, 500);
    });
}
// MAin function using Async/Await
async function doSummerChores(name) {
    try {
        await mowYard(name);
        await weedEat(name);
        await trimHegdes(name);
        await collectWood(name);
        await waterGarden(name);
        console.log(`${name} finished all summer chores.`);
    } catch (error) {
        console.log(error);
    }
}

// execute the function with different names to see the results
doSummerChores("mike");