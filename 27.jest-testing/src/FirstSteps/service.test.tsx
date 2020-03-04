import { sum, sub, mult, div } from './service';

describe('Testing the service module', ()=> {

  test.only('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
  });
  
  test('adds 0 + 2 to equal 2', () => {
    expect(sum(0, 2)).toBe(2);
  });
  
  test('subtract 3 - 2 to equal 1', () => {
    expect(sub(3, 2)).toBe(1);
  });
  
  test.skip('multiply 2 times 3 to equal 6', () => {
    expect(mult(2, 3)).toBe(6);
  });
  
  test.skip('divide 6 by 3 to equal 2', () => {
    expect(div(6, 3)).toBe(2);
  });
  
  // FAILS !
  // test('divide 6 by 0 to equal ?', () => {
  //   expect(div(6, 0)).toBe(0);
  // });
  
  test.skip('divide 6 by 0 to equal ?', () => {
    expect(div(6, 0)).toBe(Infinity);
  });

});
