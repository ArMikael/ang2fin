import { Ang2finPage } from './app.po';

describe('ang2fin App', () => {
  let page: Ang2finPage;

  beforeEach(() => {
    page = new Ang2finPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
