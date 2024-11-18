🎬 Movie Search App
A simple and responsive web application built with React.js, Ant Design, and Tailwind CSS that allows users to search for movies and view detailed information using the OMDb API.

🚀 Features

1. Search Movies: Search for movies by title using the OMDb API.
2. Display Results: View a list of movies with their titles, release years, and posters.
3. Responsive Design: Works seamlessly across devices, including mobile and desktop.
4. Modern UI: Styled using Ant Design and Tailwind CSS for an elegant and functional interface.

🛠️ Technologies Used

1. React.js: For building the frontend.
2. Ant Design: For ready-to-use UI components.
3. Tailwind CSS: For styling and responsive layouts.
4. OMDb API: To fetch movie data.

⚙️ Installation and Setup
Follow these steps to run the project locally:

Prerequisites
Node.js and npm installed on your machine

1. Clone the repo :
   git clone https://github.com/your-username/movie-search-app.git
   cd movie-search-app

2. Install Dependencies
   npm install

3. Add Api Key
   Obtain an API key from OMDb API.
   Replace the placeholder API key in the fetchMovies function in Home.js with your key.

4. Run the App : npm start

5. Open in Browser:
   Navigate to http://localhost:3000 to view the app.

movie-search-app/
├── public/ # Public assets
├── src/
│ ├── components/ # Reusable React components
│ ├── pages/ # Page components (e.g., Home)
│ ├── App.js # Main app component
│ ├── index.js # Entry point
│ ├── styles.css # Global styles (Tailwind)
│ ├── utils/ # Utility functions (e.g., API calls)
├── README.md # Project documentation
├── package.json # Dependencies and scripts
