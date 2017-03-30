import { PostModule } from './post.module';

describe('PostModule', () => {
  let postModule;

  beforeEach(() => {
    postModule = new PostModule();
  });

  it('should create an instance', () => {
    expect(postModule).toBeTruthy();
  })
});
