// When given a 2D array of the maze and an array of directions, your task is to find your way out. If you reach the end point before all your moves have gone, you should return Finish(3). If you hit any walls(1) or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost. Zeros indicate spaces that are safe for travel.

// Sample Input:
// maze = [[1,1,1,1,1,1,1],
//         [1,0,0,0,0,0,3],
//         [1,0,1,0,1,0,1],
//         [0,0,1,0,0,0,1],
//         [1,0,1,0,1,0,1],
//         [1,0,0,0,0,0,1],
//         [1,2,1,0,1,0,1]]

function mazeRunner(maze, directions) {

// NOTE: start and position are redundant. Can remove start.
  let start = null
  let position = null
  let count = 0
//NOTE: map is also redundant but makes for faster typing. Rename parameter instead. 
  let map = directions
  let result = undefined

// works with directions Array to control movement
  function move (spot) {
    switch (true) {
      case map[spot] == 'N':
        position = [position[0] - 1, position[1]]
        count++
        evaluate()
        break;
      case map[spot] == 'S':
        position = [position[0] + 1, position[1]]
        count++
        evaluate()
        break;
     case map[spot] == 'E':
        position = [position[0], position[1] + 1]
        count++
        evaluate()
        break;
     case map[spot] == 'W':
        position = [position[0], position[1] - 1]
        count++
        evaluate()
        break;
    case count === map.length:
        result = 'Lost';
        break;
    }
  }


  for(let i = 0; i < maze.length; i++) {
    if(maze[i].indexOf(2) !== -1) {
        start = [i, maze[i].indexOf(2)]
        position = start
    }
  }

  evaluate()

  function evaluate () {
    if(maze[position[0]] === undefined) {
      result = 'Dead'
      return result
    }

  switch(true) {
    case maze[position[0]][position[1]] === 1 || maze[position[0]][position[1]] === undefined:
      result = 'Dead';
      break;
    case maze[position[0]][position[1]] === 3:
      result = 'Finish';
      break;
    case maze[position[0]][position[1]] === 0:
      move(count)
      break;
    case maze[position[0]][position[1]] === 2:
      move(count)
      break;
    }
  }

  if (result !== undefined ) {
    return result
  }

}
