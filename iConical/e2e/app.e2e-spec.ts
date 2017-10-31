import { IConicalPage } from './app.po';

describe('i-conical App', () => {
  let page: IConicalPage;

  beforeEach(() => {
    page = new IConicalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
