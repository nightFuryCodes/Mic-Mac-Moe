Tic-Tac-Toe 🎮
A classic Tic-Tac-Toe game built with React. Play against another player on a dynamic board with built-in winner detection!

🎯 Features
Two-Player Mode: 
Take turns with a friend to place X's and O's.
Winner Detection: Automatically checks for a winner or a draw.
Dynamic Board: Customizable board size.
🚀 Installation
Clone this repository:


git clone https://github.com/yourusername/tictactoe.git

Navigate to the project folder:
cd tictactoe

Install dependencies:
npm install

Start the development server:
npm run dev


🎮 Usage
Open the game in your browser.
Players alternate turns, selecting cells to place their marks (X or O).
The game detects and displays the winner or declares a draw when the board is full.

🛠️ Code Structure
React Components: The game is modularly structured for easy management.
Game Logic: The checkWinner function contains the logic for detecting winners by checking rows, columns, and diagonals.
Styling: Basic styling provided, but customization is easy!

🏆 Winning Logic
The game checks for winning combinations as follows:

Rows: All cells in a row match.
Columns: All cells in a column match.
Diagonals: Checks both the primary (top-left to bottom-right) and secondary (top-right to bottom-left) diagonals.

🌱 Future Improvements
Add AI for single-player mode.
Enhance the UI with animations and improved styling.
Implement a scoreboard to track wins and losses.
