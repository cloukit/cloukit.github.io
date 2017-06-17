import { browser, by, element } from 'protractor';

export class CloukitDocumentationPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.id('hidden-e2e-hook')).getText();
  }
}
