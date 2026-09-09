# Calculator

A responsive React calculator supporting chained calculations, decimal input, number formatting, deletion, reset controls, and three selectable visual themes.

## Live Demo

[View the Live Demo](https://ramarbell.github.io/Calculator-Frontend-Mentor/)

## Screenshot

<img width="575" height="666" alt="Calculator interface showing numeric controls and theme selector" src="https://github.com/user-attachments/assets/ced87b91-831e-4627-95b2-859104aa0bb1" />

## Features

- Chain together calculations
- Switch between three different visual themes
- Enter decimal values
- Delete individual digits or reset the entire calculation
- Handle edge cases such as consecutive operator inputs and starting a new calculation after displaying a result
- Continue calculating from a previous result
  
## Built With

- React
- JavaScript (ES6+)
- CSS
- Vite

## How It Works

The calculator uses multiple pieces of state to track the current input, stored values, selected operator, and whether a calculation has just been completed. When calculations are chained together, the current result becomes the starting value for the next operation, allowing users to continue calculating without resetting the calculator. The selected theme is managed through React state and applied using CSS variables, allowing the interface colours to change without duplicating the calculator's styling.


## Running Locally

1. Clone the repository.
2. Install the dependencies:

   npm install

3. Start the development server:

   npm run dev

## What I Learned

This project taught me to think beyond the calculation logic and focus on how the application should behave from the user's perspective.

## Future Improvements

- Add keyboard controls so users can perform calculations without relying solely on the on-screen buttons.
- Add a history feature to the calculator so that users can review previous calculations without having to perform them again.

