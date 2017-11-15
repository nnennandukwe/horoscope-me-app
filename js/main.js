document.getElementsByTagName("button")[0].onclick = getHoroscope;


function getHoroscope(){

  // define variables that get values from the month and day inputs and parse as floats
    var userMonth = parseFloat(document.getElementById("month").value),
      userDay = parseFloat(document.getElementById("day").value);


  // define inner HTML arrays and objects

  var horoscopeSigns = {
        'aquarius': 'Aquarius, you won\'t find love again, fucking loser.',
        'pisces': 'Pisces, be more confident. Everyone can tell you are antisocial.',
        'aries': 'Aries, your partner is cheating on you. How could you not have known?',
        'taurus': 'Taurus, you chased after that person because you wanted love. You NEED to be chasing that paper because that bank account lookin sadder than a clown.',
        'gemini': 'Gemini, pick up a book every once in a while. You can\'t even speak correctly.',
        'cancer': 'Cancer, time to go shoppping.. If you actually want to NOT look homeless like you typically do.',
        'leo': 'Leo, we know you\'re a social butterfly, but not everything revolves around you.',
        'virgo': 'Virgo, your wavering self-confidence is prompted by someone else’s questionable behavior',
        'libra': 'Libra, you\'re so level-headed. Keep it up!',
        'scorpio': 'Scorpio, get some friends! You\'re so awkward!!!',
        'sagittarius':'Sag, geez, you can\'t even walk in a straight line. What are you? Three years old?',
        'capricorn': 'Capricorn, you lie through your teeth everyday and expect people to believe the shit you say?'
      }

  // determine horoscope with if statements depending on month and day
  if(userMonth == 1 && userDay >= 20 || userMonth == 2 && userDay <= 18) {
    document.getElementsByTagName("span")[1].innerHTML = horoscopeSigns.aquarius;
  }
  else if(userMonth == 2 && userDay >= 19 || userMonth == 3 && userDay <= 20){
    document.getElementsByTagName("span")[1].innerHTML = horoscopeSigns.pisces;
  }
  else if(userMonth == 3 && userDay >= 21 || userMonth == 4 && userDay <= 19){
    document.getElementsByTagName("span")[1].innerHTML = horoscopeSigns.aries;
  }
  else if(userMonth == 4 && userDay >= 20 || userMonth == 5 && userDay <= 20){
    document.getElementsByTagName("span")[1].innerHTML = horoscopeSigns.taurus;
  }
  else if(userMonth == 5 && userDay >= 21 || userMonth == 6 && userDay <= 20){
    document.getElementsByTagName("span")[1].innerHTML = horoscopeSigns.gemini;
  }
  else if(userMonth == 6 && userDay >= 21 || userMonth == 7 && userDay <= 22){
    document.getElementsByTagName("span")[1].innerHTML = horoscopeSigns.cancer;
  }
  else if(userMonth == 7 && userDay >= 23 || userMonth == 8 && userDay <= 22){
    document.getElementsByTagName("span")[1].innerHTML = horoscopeSigns.leo;
  }
  else if(userMonth == 8 && userDay >= 23 || userMonth == 9 && userDay <= 22){
    document.getElementsByTagName("span")[1].innerHTML = horoscopeSigns.virgo;
  }
  else if(userMonth == 9 && userDay >= 23 || userMonth == 10 && userDay <= 22){
    document.getElementsByTagName("span")[1].innerHTML = horoscopeSigns.libra;
  }
  else if(userMonth == 10 && userDay >= 23 || userMonth == 11 && userDay <= 21){
    document.getElementsByTagName("span")[1].innerHTML = horoscopeSigns.scorpio;
  }
  else if(userMonth == 11 && userDay >= 22 || userMonth == 12 && userDay <= 21){
    document.getElementsByTagName("span")[1].innerHTML = horoscopeSigns.sagittarius;
  }
  else if(userMonth == 12 && userDay >= 22 || userMonth == 1 && userDay <= 19){
    document.getElementsByTagName("span")[1].innerHTML = horoscopeSigns.capricorn;
  }
  else{
    console.log("So... your birthday must not exist..? Try again.")
  }
  // clear out input logs
  document.getElementById('month').value = "";
  document.getElementById('day').value = "";
}
