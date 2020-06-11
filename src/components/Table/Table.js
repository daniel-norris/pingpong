import React from 'react'; 

const Table = ({ history }) => (
    <table className="table table-hover mt-4 mx-2">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Player 1</th>
                <th scope="col">Player 2</th>
                <th scope="col">Winner</th>
            </tr>
        </thead>
        <tbody>
            { history.map((game, index) => (
                <tr>  
                    <th key={ index } scope="row">{ index + 1 }</th>
                    <td>{ game.player_1.score }</td>
                    <td>{ game.player_2.score }</td>
                    <td>{ game.player_1.won ? "P1" : "P2" }</td>
                </tr>
            ))}
        </tbody>
    </table>

);

export default Table; 