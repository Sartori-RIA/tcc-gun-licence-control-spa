import {FilterPipe} from './filter.pipe';

describe('FilterPipe', () => {
  it('save an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });
});
