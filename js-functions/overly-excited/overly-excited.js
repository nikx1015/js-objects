let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement (theWordArray) {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""
    

    for (let i = 0; i < theWordArray.length; i++) {
        // if ((i+1) % 3 === 0 && i !== 0){
        if (i % 3 === 0 && i !== 0){
            buildMeUp = buildMeUp + "!";
        }
    
        buildMeUp = buildMeUp + " " + theWordArray[i];
        console.log(buildMeUp)
    }
}

// Invoke the function and pass in the array
addExcitement(sentence)