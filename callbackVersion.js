function didFallAsleep(chance = 0.5) {
    return Math.random() < chance;
}
// Mow yard
function mowYard(name, callback) {
    setTimeout(() => {
        console.log(`${name} mowed the yard.`);
        callback();
    }, 2000);
}
// weed eat
function weedEat(name, callback) {
    setTimeout(() => {
        if (didFallAsleep()) {
            console.log(`${name} fell asleep after mowing the yard.`);
        } else {
            console.log(`${name} finsihed using the weed eater.`);
            callback();
        }
}, 1500);
}
// trim hedges
function trimHedges(name, callback) {
    setTimeout(() => {
        if (didFallAsleep()) {
            console.log(`${name} fell asleep after weed eating the yard.`); 
        } else {
            console.log(`${name} finished trimming the hedges.`);
            callback();
        }
    }, 1000);
}
// collect wood
function collectWood(name, callback) {
    setTimeout(() => {
        if (didFallAsleep()) {
            console.log(`${name} fell asleep after trimming the hedges.`);
        } else {
            console.log(`${name} finished collecting wood.`);
            callback();
        }
    }, 2500);
}
// water Garden 
function waterGarden(name, callback) {
    setTimeout(() => {
        if (didFallAsleep()) {
            console.log(`${name} fell asleep after collecting wood.`);
        } else {
            console.log(`${name} finished watering the garden.`);
            callback();
        }
    }, 500);

}

// callback hell
function doSummerChores(name) {
    mowYard(name, () => {
        weedEat(name, () => {
            trimHedges(name, () => {
                collectWood(name, () => {
                    waterGarden(name, () => {
                        console.log(`${name} finished all summer chores.`);
                    });
                });
            });
        });
    });
}
// run the chores
doSummerChores("Jack");