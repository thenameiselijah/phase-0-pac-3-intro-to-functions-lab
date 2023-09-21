function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}
function logWhisper(string) { 
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
      // The input string is all lowercase
      return "I can't hear you!";
    } else if (string.toUpperCase() === string) {
      // The input string is all uppercase
      return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
      // The input string matches the specific phrase
      return "I would love to!";
    } else {
      // None of the above conditions are met
      return "Hmm, I'm not sure what you mean.";
    }
  }
