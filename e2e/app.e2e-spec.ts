import { TccClientPage } from './app.po';

describe('tcc-client App', () => {
  let page: TccClientPage;

  beforeEach(() => {
    page = new TccClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
