


const runByPlayer = [
    ["Tamim", 962],
    ["Shoeb", 68],
    ["Ivan", 6549],
    ["Mihan", 10800]
]

function highestScoreFinder(array2d) {

    let topScorer = array2d[0][0];
    let topScore = array2d[0][1];

    for (let i = 1; i < array2d.length; i++){

        if (topScore < array2d[i][1]) {

            topScore = array2d[i][1];
            topScorer = array2d[i][0];
        }

    }

    return topScorer;

 
}

let topper = highestScoreFinder(runByPlayer);

document.write( "Highest Scorer is : " + topper);





