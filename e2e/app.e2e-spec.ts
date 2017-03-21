import { AptMngAppPage } from './app.po';

describe('apt-mng-app App', () => {
  let page: AptMngAppPage;

  beforeEach(() => {
    page = new AptMngAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
