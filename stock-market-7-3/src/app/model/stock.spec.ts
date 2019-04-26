import { Stock } from './stock';

describe('Stock', () => {
  it('should create an instance', () => {
    expect(new Stock("Trader Joes", "TRJ", 55, 56)).toBeTruthy();
  });
});
