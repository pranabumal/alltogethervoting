import { AlltogetherVotingPage } from './app.po';

describe('alltogether-voting App', function() {
  let page: AlltogetherVotingPage;

  beforeEach(() => {
    page = new AlltogetherVotingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
