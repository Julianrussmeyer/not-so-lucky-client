# NotSoLucky — Client

NotSoLucky is an educational German Lotto 6aus49 simulator. It lets users test what repeatedly playing the lottery could cost over weeks, years, or even a lifetime without spending real money.

This repository contains the React frontend. The Express API is available in the [NotSoLucky server repository](https://github.com/Julianrussmeyer/not-so-lucky-server).

## Live demo

[Open NotSoLucky](https://not-so-lucky-client.vercel.app)

## Features

- Create an account and log in with a username or email
- Create and save up to six Lotto 6aus49 tickets
- Add between one and twelve selections to each ticket
- Choose a Supernumber, weekly draw frequency, and simulation duration
- Edit and delete saved tickets
- Simulate lottery results across periods of up to 100 years
- Compare total ticket cost, simulated winnings, and profit or loss
- View accumulated statistics across simulations
- Access protected pages through token-based authentication

## Tech stack

- React
- Vite
- React Router
- Axios
- Tailwind CSS
- Headless UI and Heroicons
- Vercel

## Getting started

### Requirements

- Node.js
- npm
- A running instance of the [NotSoLucky server](https://github.com/Julianrussmeyer/not-so-lucky-server)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Julianrussmeyer/not-so-lucky-client.git
   cd not-so-lucky-client
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and add the API base URL:

   ```env
   VITE_API_URL=http://localhost:5005
   ```

   Adjust the port if your server uses a different one. Do not commit the `.env` file.

4. Start the development server:

   ```bash
   npm run dev
   ```

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run lint` | Check the source code with ESLint |
| `npm run preview` | Preview the production build locally |

## Related repository

- [NotSoLucky server](https://github.com/Julianrussmeyer/not-so-lucky-server)

## Project context

NotSoLucky was built as the final project for Ironhack's Web Development Part-Time course. Its purpose is educational: no real-money gambling takes place, and all results are simulations.
