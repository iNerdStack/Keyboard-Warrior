import randomWords from 'random-words';
import { sentence, paragraph } from 'txtgen';

function computeDieHardWords(): string {
  //Password Like Generated 
  let generatedWords = ""; 

  function generate() {
    const characters = 'abcdefghijklmnoqrstuvwxyz0123456789?<>!"@[]$%^&*()-+./?';
 
    let check = 2;
    let results = '';
    let randomWordLength = Math.floor((Math.random()*25) + 4);  // random 5 - 25 words 
    let length = characters.length;
  
    for (let i = 0; i <= randomWordLength; i++) {
      let mix = characters.charAt(Math.floor(Math.random() * length));
      if (mix.match(/[a-z]/i) && check > 0) {
        mix = mix.toUpperCase();
        check--;
      }
       results += mix;
    }
    return results;
  }

  for (let i = 0; i <= 8; i++) { 
    generatedWords += generate() + " ";
  }

  return generatedWords;
}

export function useLevels(level: string) {

  if (level == 'beginner') {
    return {
      words: randomWords({ exactly: 15, join: ' ' }),
      capitalize: false,
    };
  } else if (level == 'amateur') {
    return {
      words: sentence(),
      capitalize: true,
    };
  } else if (level == 'professional') {
    return {
      words: sentence() + ' ' + sentence(),
      capitalize: true,
    };
  } else if (level == 'expert') {
    return {
      words: paragraph(),
      capitalize: true,
    };
  } else if (level == 'dieHard') {
    return {
      words: computeDieHardWords(),
      capitalize: true,
    };
  }
}
