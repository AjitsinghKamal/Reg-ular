import { REGULARPage } from './app.po';

describe('reg-ular App', function() {
  let page: REGULARPage;

  beforeEach(() => {
    page = new REGULARPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
