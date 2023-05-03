# The Great Heist

The Great Heist is a web application. This is actually a game which commits to assess the soft skills of the players. The player goes through 5 levels, Each level representing a single question.There is a token and a key present in Level 3. If the user is able to solve all the questions correctly and had picked both the token and the key then the game will be successfully completed.

## Softskills Assessed
The soft skills that I have involved in  this project are:
1. Testing the intelligence, 
2. Testing logical thinking, 
3. Testing the vision,
4. Testing perseverance,
4. Building curiosity in users.

## Way to win the game
1. The player goes through 5 levels, Each level representing a single question.There is a token and a key present in Level 3. If the user is able to solve all the questions correctly and had picked both the token and the key then the game will be successfully completed.


## Deadends in the game
1. If a player does any Questions wrong, then he is diverted to a Extra question.
If he also fails to answer the extra question correctly then he is defeated. 
2. If the Player answers the extra question correctly,then he can come back and retry the question he did wrong. After coming back the player should answer every question correctly, if he fails to answer coming questions correctly then the player is considered as defeated.
3. There is a Key and a Token Placed in Question 3. If the Player fails to pick any of them, the player gets defeated  
even if he Answers everything correctly.

## Steps to set up the project
### `Install Git`

### `Install Node` 

### `Install Favourite Code Editor (like VS Code)`

### `clone current repo by`:  [https://github.com/gopisai1902/The-Great-Heist.git](https://github.com/gopisai1902/The-Great-Heist.git)

### ` npm i` 

Install all package.json dependencies
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Checklist of implemented features
1. Anyone with an email address can create an Id and password to participate in the game.
2. The puzzle contains
+Minimum 5 clues
-Minimum 2 dead-ends
*Minimum 1 solution 
3. All the progress  that is  user data is stored for every user.
4. A dashboard for the admin where the progress of all the users can\ be tracked & analyzed.
5. User analytics is stored and shown in the admin dashboard.
6. Data analysis using different graphs or tables is done

## Testcases
1. First question is answered correctly, the player moves on to level-2, second question is answered correctly, the player moves on to level-3, third question is answered correctly, The player picks up both the key and the token, the player moves on to level-4 , fourth question is answered correctly, the player moves to the final level, fifth question is answered correctly.(The player wins.)
2. First question is answered correctly, the player moves on to level-2, second question is answered correctly, the player moves on to level-3, third question is answered correctly, The player picks only the key, the player moves on to level-4 , fourth question is answered correctly, the player moves to the final level, fifth question is answered correctly.(The player looses as he forgot to pick the token in level-3)
3. First question is answered correctly, the player moves on to level-2, second question is answered correctly, the player moves on to level-3, third question is answered correctly, The player picks only the token, the player moves on to level-4 , fourth question is answered correctly, the player moves to the final level, fifth question is answered correctly.(The player looses as he forgot to pick the token in level-3.)
4. In Level-1, First question is answered incorrectly, the player moves to level-0, zeroth level questin is answered correctly, the playes again comes to level-1,
   first question is answered correctly, the player moves on to level-2, second question is answered incorrectly.(The player is defeated)   

## Solution for Questions
1. Five girls are sitting on a bench to be photographed. Seema is to the left of Rani and to the right of Bindu. Mary is to the right of Rani.
Reeta is between Rani and Mary.Who is sitting immediate right to Reeta? - b)Mary
2. Assume every person in the museum blinks their eye for every 5 modulo sec. Current time = 02:09:31 PM. (Hours : Minutes : Seconds). What would be the nearest time to trigger the alarm safely? - d)02:09:35 PM
3. Solve the maze to fing the second key? - a)24
4. In some coding language, security is coded as vhfxulwb. what is the word lazer coded as?(Hint : Decrypt by following substitution Cipher)
 d)odchu
5. Solve the word puzzle to open the vault where Diamond lies. c)2

## Netlify Link





