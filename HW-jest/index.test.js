 const {doubleEverySecondNumber} = require('./index');
 const {sumWithCallback} = require('./index')

const app = require('./app'); 


describe('doubleEverySecondNumber', () => {
    it('should double every second number in the array', () => {
      const arr = [1, 2, 3, 4, 5];
      const expected = [1, 4, 3, 8, 5];
      expect(doubleEverySecondNumber(arr)).toEqual(expected);
    });
  
    it('should handle an empty array', () => {
      const arr = [];
      const expected = [];
      expect(doubleEverySecondNumber(arr)).toEqual(expected);
    });
  
    it('should double the single element in the array', () => {
      const arr = [7];
      const expected = [7];
      expect(doubleEverySecondNumber(arr)).toEqual(expected);
    });
  
    it('should double every second number in a array', () => {
      const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
      const expected = arr.map((num, index) => (index % 2 === 1 ? num * 2 : num));
      expect(doubleEverySecondNumber(arr)).toEqual(expected);
    });
  });
 
  describe('sumWithCallback', () => {
    it('should call the callback function with the sum of num1 and num2', () => {
      const num1 = 5;
      const num2 = 10;
      const callback = jest.fn();
  
      sumWithCallback(num1, num2, callback);
  
      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith(num1 + num2);
    });
  
    it('should work with negative numbers', () => {
      const num1 = -3;
      const num2 = 8;
      const callback = jest.fn();
  
      sumWithCallback(num1, num2, callback);
  
      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith(num1 + num2);
    });
  
    it('should handle decimal numbers', () => {
      const num1 = 3.14;
      const num2 = 2.71;
      const callback = jest.fn();
  
      sumWithCallback(num1, num2, callback);
  
      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith(num1 + num2);
    });
  });

 


describe('app', () => {
  it('should correctly mock and test foo function', () => {
    const mockFoo = jest.spyOn(app, 'foo');
    mockFoo.mockImplementation((x, y) => {
      
      expect(x).toBe(10);
      expect(y).toBe(20);
      
    });
   
    app.foo(10, 20);    
    expect(mockFoo).toHaveBeenCalledTimes(1);    
    mockFoo.mockRestore();
  });

  it('should correctly mock and test bar function', () => {
    const mockBar = jest.spyOn(app, 'bar'); 
    mockBar.mockImplementation((a, b) => {
      
      expect(a).toBe('Hello');
      expect(b).toBe('World');
      return 22; 
    });

    
    const result = app.bar('Hello', 'World');    
    expect(mockBar).toHaveBeenCalledTimes(1);    
    expect(result).toBe(22);    
    mockBar.mockRestore();
  });
});

  