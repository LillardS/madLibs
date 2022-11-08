createParagraph = () => {
    var wordOne = document.getElementById('word1').value;
    var wordTwo = document.getElementById('word2').value;
    var wordThree = document.getElementById('word3').value;
    var wordFour = document.getElementById('word4').value;
    var wordFive = document.getElementById('word5').value;
    var wordSix = document.getElementById('word6').value;
    var wordSeven = document.getElementById('word7').value;
    var wordEight = document.getElementById('word8').value;
    var wordNine = document.getElementById('word9').value;
    var wordTen = document.getElementById('word10').value;
    var wordEleven = document.getElementById('word11').value;
    var wordTwelve = document.getElementById('word12').value;
    var wordThirteen = document.getElementById('word13').value;
    var wordFourteen = document.getElementById('word14').value;
    var wordFifteen = document.getElementById('word15').value;

    var paragraph = "If zombies " + wordOne + " a picnic, what would they " + wordTwo +" to eat? Everyone knows zombies love to " + wordThree + ' ' + wordFour +", but did you know they also injoy " + wordFive +  " and even " + wordSix +"? The best " + wordSeven + " for a zombie picnic is when the moon is " + wordEight +". At least one zombie will bring " + wordNine + " to drinkand it\'s not a picnic without " + wordTen + " with extra " + wordEleven + " on top. After eating, zombie will " + wordTwelve + ' ' + wordThirteen + " games like kick the "  + wordFourteen +  " and " + wordFifteen + " toss.";
    
    document.getElementById('answer').innerHTML = paragraph;
}