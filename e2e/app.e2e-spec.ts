import { CadastroclientePage } from './app.po';

describe('cadastrocliente App', () => {
  let page: CadastroclientePage;

  beforeEach(() => {
    page = new CadastroclientePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
