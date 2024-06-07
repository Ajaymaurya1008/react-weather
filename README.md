```markdown:README.md
# React Weather App

This project is a weather forecasting application built with React and Vite. It provides real-time weather information using the WeatherAPI.

## Features
- Real-time weather updates
- Dark mode support
- Responsive design
- Tailwind CSS for styling
- DaisyUI components
- ESLint and Prettier for code quality

## Libraries and Tools
- **React**: UI library
- **Vite**: Build tool
- **Axios**: HTTP client
- **React Router**: Routing
- **Tailwind CSS**: Utility-first CSS framework
- **DaisyUI**: Tailwind CSS components
- **ESLint**: Linting
- **Prettier**: Code formatting

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/react-weather.git
    cd react-weather
    ```
2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

### Running the App
- Development mode:
    ```sh
    npm run dev
    # or
    yarn dev
    ```
- Build for production:
    ```sh
    npm run build
    # or
    yarn build
    ```
- Preview the production build:
    ```sh
    npm run preview
    # or
    yarn preview
    ```

### Linting and Formatting
- Lint the code:
    ```sh
    npm run lint
    # or
    yarn lint
    ```
- Format the code:
    ```sh
    npm run format
    # or
    yarn format
    ```

## Project Structure
- `src/`: Source code
  - `components/`: Reusable components
  - `pages/`: Application pages
  - `App.jsx`: Main app component
  - `main.jsx`: Entry point
- `public/`: Static assets
- `index.html`: Main HTML file
- `tailwind.config.js`: Tailwind CSS configuration
- `postcss.config.js`: PostCSS configuration
- `.eslintrc.cjs`: ESLint configuration
- `.prettierrc`: Prettier configuration

## Configuration
- **WeatherAPI Key**: Add your WeatherAPI key in a `.env` file at the root of the project:
    ```
    VITE_WEATHER_API_KEY=your_api_key_here
    ```

## License
This project is licensed under the MIT License.
```

