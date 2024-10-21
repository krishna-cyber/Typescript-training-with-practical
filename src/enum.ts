enum Direction {
    Up,  //default initializeer to 0
    Down,  //increment so it 1
    Left,  //2
    Right  //3
}

console.log(Direction.Up)


//first value initializer
enum AnotherDirection {
    Up=1,  //initialized to 1
    Down,  //increment so it 2
    Left,  //3
    Right  //4
}

console.log(AnotherDirection.Right)