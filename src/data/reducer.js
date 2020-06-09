// dont need to import react into data files 

import initial from './initial'; 

const history = state => ({
    ...initial, 
    history: [ ...state.history, {
      player_1: { score: state.player1, won: state.winner === 1 }, 
      player_2: { score: state.player2, won: state.winner === 2 }
    }
  ]
});

const player2Lead = state => {
  return state.player2 >= state.player1 + 2; 
}

const player1Lead = state => {
  return state.player1 >= state.player2 + 2;
}

const findWinner = state => {
  return state.player1 > state.player2 ? 1 : 2; 
}

const winner = state => ({
  ...state, 
  winner:  ((state.player1 >= 21 || state.player2 >= 21) && (player1Lead || player2Lead)) ? findWinner(state) : 0 
}); 

const alternateServes = state => {
    return state.player1 >= 20 && state.player2 >= 20 ? 2 : 5;
}

// refactor this using computed property names and an action payload 
const player1 = state => ({ 
  ...state, 
  player1: state.winner ? state.player1 : state.player1 + 1 });

const player2 = state => ({ 
  ...state, 
  player2: state.winner ? state.player2 : state.player2 + 1 });

const server = state => ({
    ...state, 
    p1serving: ((state.player1 + state.player2) % alternateServes(state) === 0) ? !state.p1serving : state.p1serving

}); 
    
// reducer goes here 
const reducer = (state, action) => { 
  switch(action.type) {
    case "PLAYER1": return winner(server(player1(state))); 
    case "PLAYER2": return winner(server(player2(state))); 
    case "RESET": return history(state); // get history to trigger on win not reset 
    default: return state; 
  }
}

export default reducer; 