import { browser, element, by } from 'protractor';

export class HexrgbConverterPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('octo-root h1')).getText();
  }
}
