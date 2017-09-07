function TennisGame() {
    const scoreString = ['Love', 'Fifteen', 'Thirty', 'Forthy']
    this.playerAScore
    this.playerBScore

    this.reset = () => {
        this.playerAScore = 0
        this.playerBScore = 0
    }

    this.echo = () => {
       return `${scoreString[this.playerAScore]} - ${scoreString[this.playerBScore]}`
    }

    this.playerAGteScore = () => {
        this.playerAScore++
    }
    this.playerBGteScore = () => {
        this.playerBScore++
    }
}

test('Echo "Love - Love" when game start', () => {
    // Arrange
    let app = new TennisGame()

    // Act
    app.reset()
    let result = app.echo()

    // Assert
    expect(result).toBe('Love - Love')
})

test('Echo "Fifteen - Love" when playerA get first score', () => {
    // Arrange
    let app = new TennisGame()
    app.reset()
    app.playerAGteScore()

    // Act
    let result = app.echo()

    // Assert
    expect(result).toBe('Fifteen - Love')
})
test('Echo "Love - Fifteen" when playerA get first score', () => {
    // Arrange
    let app = new TennisGame()
    app.reset()
    app.playerBGteScore()

    // Act
    let result = app.echo()

    // Assert
    expect(result).toBe('Love - Fifteen')
})

test('Echo "Thirty - Fourty" when playerA get Two score and playerB get T score', () => {
    // Arrange
    let app = new TennisGame()
    app.reset()
    app.playerAScore = 2
    app.playerBScore = 3


    // Act
    let result = app.echo()

    // Assert
    expect(result).toBe('Thirty - Forthy')
})
