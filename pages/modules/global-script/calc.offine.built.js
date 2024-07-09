function getScore(inputNum, orginalStandard, calcMode = "num", extremeoutputScore=null) {
    // outputState:
    //   0: success
    //   1: error
    //   2: warning

    let invertedStandard = invert(orginalStandard);
    var outputScore, outputState, outputMessage;
    
    if (calcMode === "num") {
        let lastStandardKey = orginalStandard[10];
        inputNum = parseInt(inputNum);

        for (let standardKey in invertedStandard) {
            if (inputNum >= parseInt(orginalStandard[100])) {
                outputScore = 100;
            } else if (inputNum < parseInt(orginalStandard[10])) {
                outputScore = 0;
            } else if (inputNum < parseInt(standardKey)) {
                outputScore = invertedStandard[lastStandardKey];
                break;
            }
            lastStandardKey = standardKey;
        }
        
        outputState = 0;
        outputMessage = "计算成功！";

    } else if (calcMode === "time_long") {
        var invertedoperatedStandard = {};
        var operatedStandard = JSON.parse(JSON.stringify(orginalStandard));

        for (let standardKey in operatedStandard) {
            if (operatedStandard.hasOwnProperty(standardKey)) {
                operatedStandard[standardKey] = timeFormat(operatedStandard[standardKey]);
            }
        }

        let lastStandardKey = operatedStandard[10];
        invertedoperatedStandard = invert(operatedStandard);

        inputNum= timeFormat(inputNum); 
        // console.log(invertedoperatedStandard, operatedStandard);  
        // console.log(Number(operatedStandard[100]), Number(operatedStandard[10]), inputNum)
        for (let standardKey in invertedoperatedStandard) {
            // console.log(standardKey)
            if (inputNum<= Number(operatedStandard[100])) {
                // console.log("A");
                outputScore = 100;
            } else if (inputNum> Number(operatedStandard[10])) {
                // console.log("B");
                outputScore = 0;
            } else if (inputNum<= Number(standardKey)) {
                // console.log("C", standardKey, inputNum, lastStandardKey);
                outputScore = invertedoperatedStandard[standardKey];
                break;
            }
            lastStandardKey = standardKey;
        }

        outputState = 0;
        outputMessage = "计算成功！";

    } else if (calcMode === "time_short") {
        var invertedoperatedStandard = {};
        var operatedStandard = JSON.parse(JSON.stringify(orginalStandard));

        for (let standardKey in operatedStandard) {
            if (operatedStandard.hasOwnProperty(standardKey)) {
                operatedStandard[standardKey] = operatedStandard[standardKey] * 10;
            }
        }

        let lastStandardKey = operatedStandard[10];
        invertedoperatedStandard = invert(operatedStandard);

        inputNum= Number(inputNum) * 10;
        // console.log(invertedoperatedStandard, operatedStandard);  
        // console.log(Number(operatedStandard[100]), Number(operatedStandard[10]), inputNum)
        for (let standardKey in invertedoperatedStandard) {
            // console.log(standardKey);
            if (inputNum<= Number(operatedStandard[100])) {
                // console.log("A");
                outputScore = 100;
            } else if (inputNum> Number(operatedStandard[10])) {
                // console.log("B");
                outputScore = 0;
            } else if (inputNum<= Number(standardKey)) {
                // console.log("C", standardKey, inputNum, lastStandardKey);
                outputScore = invertedoperatedStandard[standardKey];
                break;
            }
            lastStandardKey = standardKey;

            outputState = 0;
            outputMessage = "计算成功！";

        }
    }

    if (calcMode!="num" && inputNum==0) {
        outputScore = 0;
    }

    delete invertedoperatedStandard, operatedStandard;

    return {"State": outputState, "Score": outputScore, "Message": outputMessage};
}

function invert(orginalDict) {
    const operatedReversed = Object.entries(orginalDict).reduce((invertedAcc, [standardKey, orginalDictValue]) => {
        invertedAcc[orginalDictValue] = standardKey;
        return invertedAcc;
    }, {});
    return operatedReversed;
}

function timeFormat(orginalTimeWS) {
    const ifCorrectTimeWS = orginalTimeWS.match(/(\d+)'(\d+)"/);
    if (ifCorrectTimeWS) {
        const operatedTimeWSMinutes = parseInt(ifCorrectTimeWS[1], 10);
        const operatedTimeWSSecoonds = parseInt(ifCorrectTimeWS[2], 10); 
        return operatedTimeWSMinutes * 60 + operatedTimeWSSecoonds;
    } else {
        // throw new Error('Invalid time format');
        return 0;
    }
}