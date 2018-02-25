import en from './en.json';
import ru from './ru.json';

const locales = {en,ru};


class Locale {
  constructor(language){
    this.strings = locales[language];
    this.subscribtions = [];
  }


  setLanguage(language){
    this.strings = locales[language];
    this.subscribtions.forEach(cb => cb());
  }

  subscribe(callback){
    this.subscribtions.push(callback);
  }
}

export default Locale;
