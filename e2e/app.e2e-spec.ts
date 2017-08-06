import { ShoppingListExamplePage } from './app.po';

describe('shopping-list-example App', () => {
  let page: ShoppingListExamplePage;

  beforeEach(() => {
    page = new ShoppingListExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
