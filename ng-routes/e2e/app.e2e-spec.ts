import { NgRoutesPage } from './app.po';

describe('ng-routes App', () => {
  let page: NgRoutesPage;

  beforeEach(() => {
    page = new NgRoutesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
