import { BBLPage } from './app.po';

describe('bbl App', () => {
  let page: BBLPage;

  beforeEach(() => {
    page = new BBLPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('octo works!');
  });
});
