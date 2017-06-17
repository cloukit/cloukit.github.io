import { CloukitDocumentationPage } from './app.po';

describe('cloukit-documentation App', () => {
  let page: CloukitDocumentationPage;

  beforeEach(() => {
    page = new CloukitDocumentationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
