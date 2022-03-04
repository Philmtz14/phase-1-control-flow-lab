function scuberGreetingForFeet(someValue) {
  // Write your code here!
  let result
  if (someValue <= 199) {
    result = 'gives customers a free sample if the ride is less than or equal to 400 feet';
    return 'This one is on me!'
  } else if (someValue <= 2500) {
    result = 'charges 30 dollars for a distance over 2000 feet';
    return 'I will gladly take your thirty bucks.';
  } else (someValue > 2500); {
    result = 'does not allow rides over 2500 feet';
    return 'No can do.';
  }
}


function ternaryCheckCity(city) {
      return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}



function switchOnCharmFromTip(attitude) {
    switch (attitude) {
      case attitude = 'generous':
        return 'Thank you so much.';
      case attitude = 'not as generous':
        return 'Thank you.';
      case attitude = 'thanks for everything':
        return 'Bye.';
    }
  }