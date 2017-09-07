function TennisGame(){
this.pressA =()=>{
}
this.echo = ()=>{
  return 'Love-Fiften'
}
}

test('Echo "Love-Fiften" when press A button',() => {
  //arrange
  let app = new TennisGame()
  //act
  app.pressA()
  let result = app.echo()
  //Assert
  expect(result).toBe('Love-Fiften')
})
