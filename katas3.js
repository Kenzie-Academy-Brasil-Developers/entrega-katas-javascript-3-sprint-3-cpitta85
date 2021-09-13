function showResults(string){
    const body = document.querySelector("body")
    let element = document.createElement("div")
    element.innerText = string
    body.appendChild(element)
}

const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {
    let num = ""
    let i = 0
    for(i = 1; i < 25; i++) {
        num += i + " "
    }
    num += i
    return num    
}
showResults(kata1())

function kata2() {
    let num = ""
    let i = 0
    for(i = 25; i > 1; i--) {
        num += i + " "
    }
    num += i
    return num
}
showResults(kata2())

function kata3() {
    let num = ""
    let i = 0
    for(i= -1; i > -25; i--) {
        num += i+ " "
    }
    num += i
   return num
}
showResults(kata3())

function kata4() {
    let num = ""
    let i = 0
    for(i = -25; i < -1; i++) {
        num += i+ " "
    }
    num += i
    return num
}
showResults(kata4())

function kata5() {
    let num = ""
    let i = 0
    for(i = 25; i > -25; i--) {
        if(i%2 == 1 || i%2 == -1)
        num += i + " "
    }
    num += i
    return num
}
showResults(kata5())

function kata6() {
    let num = ""
    let i = 0
    for(i = 1; i < 99; i++) {
        if (i%3 == 0)
        num += i + " "
    }
    num += i
    return num
}
showResults(kata6())

function kata7() {
    let num = ""
    let i = 0
    for(i = 7; i <98; i = i + 7) {
        num += i + " "
    }
    num += i
    return num
}
showResults(kata7())

function kata8() {
    let num = ""
    let i = 0
    for(i = 100; i > 3; i--) {
        if(i%3 == 0 || i%7 == 0)
        num += i + " "
    }
    num += i
    return num
}
showResults(kata8())

function kata9() {
    let num = ""
    let i = 0
    for(i = 5; i < 95; i++) {
        if(i%5 == 0 && i%2 != 0)
        num += i + " "
    }
    num += i
    return num
}
showResults(kata9())

function kata10() {
    let num = ""
    for (let i = 0; i < sampleArray.length; i++) {
        if (i != sampleArray.length - 1) {
            num += sampleArray[i] + " "
        } else {
            num += sampleArray[i]
        }
    }
    return num
}
showResults(kata10())

function kata11() {
    let num = ""
    for (let i = 0; i < sampleArray.length; i++) {
        if (i != sampleArray.length - 1) {
            if (sampleArray[i] % 2 == 0)
                num += sampleArray[i] + " "
        } else {
            if (sampleArray[i] % 2 == 0)
                num += sampleArray[i]
        }
    }
    return num
}
showResults(kata11())

function kata12() {
    let num = ""
    for (let i = 0; i < sampleArray.length; i++) {
        if (i != sampleArray.length - 1) {
            if (sampleArray[i] % 2 == 1)
                num += sampleArray[i] + " "
        } else {
            if (sampleArray[i] % 2 == 1)
                num += sampleArray[i]
        }
    }
    return num
}
showResults(kata12())

function kata13() {
    let num = ""
    for (let i = 0; i < sampleArray.length; i++) {
        if (i != sampleArray.length - 1) {
            if (sampleArray[i] % 8 == 0)
                num += sampleArray[i] + " "
        } else {
            if (sampleArray[i] % 8 == 0)
                num += sampleArray[i]
        }
    }
    return num
}
showResults(kata13())

function kata14() {
    let num = ""
    for (let i = 0; i < sampleArray.length; i++) {
        num += sampleArray[i] * sampleArray[i] + " "
    }
    return num
}
showResults(kata14())

function kata15() {
    let sum = 0
    for (let i = 1; i <= 20; i++) {
        sum = sum + i
    }
    return sum
}
showResults(kata15())

function kata16() {
    let sum = 0
    for (let i = 0; i < sampleArray.length; i++) {
        sum = sum + sampleArray[i]
    }
    return sum
}
showResults(kata16())

function kata17() {
    let numMenorArray = sampleArray[0]
    for (let i = 1; i < sampleArray.length; i++) {
        if (sampleArray[i] < numMenorArray) {
            numMenorArray = sampleArray[i]
        }
    }
    return numMenorArray
}
showResults(kata17())


function kata18() {
    let numMaiorArray = sampleArray[0]
    for (let i = 1; i < sampleArray.length; i++) {
        if (sampleArray[i] > numMaiorArray) {
            numMaiorArray = sampleArray[i]
        }
    }
    return numMaiorArray
}
showResults(kata18())


/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

 function kataBonus1() {
    const body = document.querySelector("body")
    for (let i = 0; i < 20; i++) {
        let element = document.createElement("div")

        element.style.backgroundColor = "grey"
        element.style.border = "solid"
        element.style.borderColor = "black"
        element.style.width = "100px"  
        element.style.height = "20px"        
        element.style.marginBottom = "2px"

        body.appendChild(element)
    }
 }
 kataBonus1()


function kataBonus2() {
    const body = document.querySelector("body")
    let largura = 105
    for (let i = 0; i < 20; i++) {
        let element = document.createElement("div")

        largura = largura + 5
        element.style.width = largura + "px"
        element.style.height = "20px"
        element.style.border = "solid"
        element.style.borderColor = "black"
        element.style.backgroundColor = "grey"
        element.style.marginBottom = "2px"
        
        body.appendChild(element)
    }
}
kataBonus2()


function kataBonus3() {
    const body = document.querySelector("body")
    for (let i = 0; i < 20; i++) {
        let element = document.createElement("div")

        element.style.width = sampleArray[i] + "px"
        element.style.height = "20px"
        element.style.border = "solid"
        element.style.borderColor = "black"
        element.style.backgroundColor = "grey"
        element.style.marginBottom = "2px"
        
        body.appendChild(element)
    }
}
kataBonus3()


function kataBonus4() {
    const body = document.querySelector("body")
    for (let i = 0; i < 20; i++) {

        let element = document.createElement("div")
        if (i % 2 == 0) {
            element.style.backgroundColor = "grey"
        } else {
            element.style.backgroundColor = "red"
        }

        element.style.width = sampleArray[i] + "px"
        element.style.height = "20px"
        element.style.border = "solid"
        element.style.borderColor = "black"
        element.style.marginBottom = "2px"
        
        body.appendChild(element)
    }
}
kataBonus4()


function kataBonus5() {
    const body = document.querySelector("body")
    for (let i = 0; i < 20; i++) {

        let element = document.createElement("div")
        if (sampleArray[i] % 2 == 0) {
            element.style.backgroundColor = "red"
        } else {
            element.style.backgroundColor = "grey"
        }
        
        element.style.width = sampleArray[i] + "px"
        element.style.height = "20px"
        element.style.border = "solid"
        element.style.borderColor = "black"
        element.style.marginBottom = "2px"
        
        body.appendChild(element)
    }
}
kataBonus5()