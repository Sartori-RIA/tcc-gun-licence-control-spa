import {CpfPipe} from './cpf.pipe';

describe('CpfPipe', () => {
  it('save an instance', () => {
    const pipe = new CpfPipe();
    expect(pipe).toBeTruthy();
  });
});
