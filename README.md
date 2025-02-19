# Nuxt 3 User Management App

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Description

This is a Nuxt 3 application designed to fetch and display a list of users from the JSONPlaceholder API. Users can click on any user in the list to view detailed information about them. The app is styled using Tailwind CSS and Bootstrap for a modern and responsive design.

## Features

- Fetch and display a list of users from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users).
- Dynamic user detail pages with formatted data.
- Styled with Tailwind CSS and Bootstrap for an attractive and responsive UI.
- Fully functional and deployable to platforms like Vercel or Netlify.

## Technologies Used

- **Framework**: Nuxt 3
- **Styling**: Tailwind CSS, Bootstrap
- **API**: JSONPlaceholder
- **State Management**: Composables (useUsers.ts)
- **Utilities**: Format functions for name and email formatting

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/tonyvillegas91/nuxt-plexicus.git
   ```
2. Navigate to the project directory:
   ```bash
   cd nuxt-plexicus
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and go to [http://localhost:3000](http://localhost:3000).

## Usage

   - On the home page, you will see a list of users fetched from the API.
   - Click on any user to view their detailed information, including name, email, and city.
   - The app is fully responsive and works on both desktop and mobile devices.

## Deployment

This application is deployed using Vercel. You can access the live version here:
https://nuxt-plexicus.vercel.app/

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
     

