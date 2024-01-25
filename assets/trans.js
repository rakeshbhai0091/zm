// Language translations
const translations = {
  "english": {
    "profile": "Profile",
    "shop": "shop."
  },
  "urdu": {
    "profile": "پروفائل",
    "shop": "خریداری"
  },
  "chinese": {
    "profile": "个人资料",
    "shop": "商店"
  }
};

let selectedLanguage = "english"; // Default language

// Function to change the language
function changeLanguage(language) {
  selectedLanguage = language;
  applyTranslation();
}

// Function to apply the translation
function applyTranslation() {
  const elements = document.querySelectorAll('*:not(script)');
  
  elements.forEach(element => {
    element.childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        let translatedText = node.textContent;
        Object.keys(translations[selectedLanguage]).forEach(key => {
          const regex = new RegExp(`\\b${key}\\b`, "gi");
          translatedText = translatedText.replace(regex, translations[selectedLanguage][key]);
        });
        node.textContent = translatedText;
      }
    });
  });
}

// Apply the initial translation
applyTranslation();
