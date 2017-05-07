import { GrillberPage } from './app.po';

describe('grillber App', () => {
  let page: GrillberPage;

  beforeEach(() => {
    page = new GrillberPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
