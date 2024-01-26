# resOS Restaurant Finder App

![ResOS Logo](https://media.tekpon.com/2023/05/resOS-Logo.webp)

Welcome to the Restaurant Finder App! This web application allows users to search and explore different restaurants based on various criteria.

- [Live demo](https://resos.eu.meteorapp.com/)

## Features

- **Home Page:**
  - Search for restaurants based on keywords.
  - Browse restaurants by cuisine.
  - Quick access to view all restaurants.

- **All Restaurants Page:**
  - Filter restaurants by style and/or status.
  - Clear filters to view all restaurants.
  - Responsive design for mobile and desktop.

## Technologies Used

- **Frontend:**
  - React
  - Material-UI
  - Meteor (data-management)

- **Backend:**
  - Meteor (MongoDB)

- **Styling:**
  - Material UI components
  - CSS with media queries for responsive design

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/greg-munro/resOS-restaurants

2. Install dependencies

   ```bash 
   cd resOS-restaurants
   npm install

3. Run the app:
Open one terminal and run

  ```bash
     meteor run
```

Open a second terminal and run

  ```bash
     meteor mongo
  ```

## Usage 
Open the app in your browser.
Explore restaurants by using the search bar, cuisine buttons, or view all restaurants.
On the "All Restaurants" page, use filters to narrow down your search.
Click the more info dropdown to display information about the restaurant.
If no restaurants are found by user's prompt, an error message will display. 

## Testing

To run testing, open the terminal and run

```bash
     npm run test:watch
```

## Backlog

- Performance Optimization:

Analyze the performance of the application and identify areas for optimization.
Implement lazy loading for images or components to improve initial load times.

- Unit Testing Coverage:

Increase unit test coverage for React components and backend Meteor methods.
Write test cases for edge cases and error scenarios to ensure robustness.

- UI/UX Enhancements:

Gather user feedback and prioritize UI/UX improvements based on user needs and pain points.

- Feature Enhancements:

Add new features based on user requests or market trends.
Improve existing features based on user feedback or usage analytics.

- Localization and Internationalization:

Add support for multiple languages to make the application accessible to a wider audience.

- Code Refactoring:

Identify and refactor any code smells or areas of technical debt in the application.
Remove any components that have no future use of reuse.