import { Pf.Gov.BrPage } from './app.po';

describe('pf.gov.br App', () => {
  let page: Pf.Gov.BrPage;

  beforeEach(() => {
    page = new Pf.Gov.BrPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
