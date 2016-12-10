import { CA2Page } from './app.po';

describe('ca2 App', function() {
  let page: CA2Page;

  beforeEach(() => {
    page = new CA2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
