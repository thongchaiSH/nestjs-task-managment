function addNumbers(num1:number, num2:number) {
  return num1 + num2;
}

describe('addNumbers',()=>{
    it('adds two numbers',()=>{
        expect(addNumbers(2,2)).toEqual(4);
    })
})

describe('Example test', () => {
  it('equat true', () => {
    expect(true).toEqual(true);
  });
});
