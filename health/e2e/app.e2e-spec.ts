import { HealthPage } from './app.po';

describe('health App', () => {
  let page: HealthPage;

  beforeEach(() => {
    page = new HealthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
