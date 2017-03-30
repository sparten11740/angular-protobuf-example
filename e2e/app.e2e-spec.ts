import { AngularProtobufExamplePage } from './app.po';

describe('angular-protobuf-example App', () => {
  let page: AngularProtobufExamplePage;

  beforeEach(() => {
    page = new AngularProtobufExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
