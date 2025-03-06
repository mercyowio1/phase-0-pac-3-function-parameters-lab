function introduction(name) {
    return `Hi, my name is ${name}.`
  }
  
  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
  }
  
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  // Only export functions if module is defined (i.e., in Node.js)
  if (typeof module !== "undefined" && module.exports) {
    module.exports = {
      introduction,
      introductionWithLanguage,
      introductionWithLanguageOptional,
    };
  }