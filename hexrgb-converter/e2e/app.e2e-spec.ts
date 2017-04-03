import { HexrgbConverterPage } from './app.po';

describe('hexrgb-converter App', () => {
  let page: HexrgbConverterPage;

  beforeEach(() => {
    page = new HexrgbConverterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('octo works!');
  });
});
