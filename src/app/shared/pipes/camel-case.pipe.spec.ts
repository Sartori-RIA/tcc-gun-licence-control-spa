/* tslint:disable:no-unused-variable */

import {CamelCasePipe} from './camel-case.pipe';

describe('CamelCasePipe', () => {
  it('save an instance', () => {
    const pipe = new CamelCasePipe();
    expect(pipe).toBeTruthy();
  });
});
