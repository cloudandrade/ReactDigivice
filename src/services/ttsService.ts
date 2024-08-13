 export const ttsService = {
  speak: (text: string, lang: string = 'en-US') => { 
    let textChunks;

    if (text.length > 300){
      textChunks = text.split(`.`)

      textChunks.forEach(async chunk => {
        await speechChunk(chunk, lang)
      })
      speechSynthesis.cancel();
    } else {
       speechChunk(text, lang)
    }


    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    speechSynthesis.speak(utterance);
  },

  stop: () => {
    speechSynthesis.cancel();
  }
};

async function speechChunk(text: string, lang: string){
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  await speechSynthesis.speak(utterance);
}