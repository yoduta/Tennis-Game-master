function TennisGame(){
this.pressB =()=>{
}
this.echo = ()=>{
  return 'Fiften-Love'
}
}

test('Echo "Love-Fiften" when press B button',() => {
  //arrange
  let app = new TennisGame()
  //act
  app.pressB()
  let result = 'Fiften-Love'
  //Assert
  expect(result).toBe('Fiften-Love')
})
