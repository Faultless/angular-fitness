import { MeanFitnessPage } from './app.po';

describe('mean-fitness App', () => {
  let page: MeanFitnessPage;

  beforeEach(() => {
    page = new MeanFitnessPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
