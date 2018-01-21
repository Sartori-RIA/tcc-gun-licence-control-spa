import {ReversePipe} from './reverse.pipe';

describe('ReversePipe', () => {
  it('save an instance', () => {
    const pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
  });
});
