# AN Radio Podcast Page

This is the podcast page for AN Radio, showcasing episodes and providing easy access to Spotify and Apple Podcasts platforms.

## Features
- Embedded Spotify player and Apple Podcasts player.
- Dynamic rendering of the latest episodes.
- Clean and modern design.
- Responsive layout for both desktop and mobile.
- React.js for efficient rendering and state management.

## Structure

### React Components
- **App.js**: The main component that serves as the entry point for the application.
- **Header.js**: Contains the title and a brief introduction to the podcast.
- **Players.js**: Integrates embedded players for Spotify and Apple Podcasts.
- **Episodes.js**: Displays the latest episodes dynamically.
- **Footer.js**: Includes social media links and other relevant information.

### CSS (style.css)
- Custom styles for making the page look modern and responsive.
- Colors are chosen for a dark-themed page with highlights for buttons and text.

## Embeds
### Spotify Podcast:
- The embedded Spotify player is integrated using the following ID:
  - [Spotify Podcast](https://open.spotify.com/show/29QI7M3Q0kS7WEYsLJYns4)

### Apple Podcasts:
- The embedded Apple Podcasts player is integrated using the following ID:
  - [Apple Podcasts](https://podcasts.apple.com/sa/podcast/an-radio/id1613191332)

## Adding New Episodes
1. In the `Episodes.js` component, locate the array or state where episodes are stored.
2. Add new episode objects to the array, following the format:
   ```javascript
   const episodes = [
       {
           title: "Episode Title",
           description: "Description of the episode.",
           spotifyLink: "spotify_episode_link",
           appleLink: "apple_episode_link",
       },
       // Add more episodes here
   ];
   ```
3. Each episode will be rendered dynamically in the Episodes component.

## Running the Application
To run the application locally, follow these steps:
1. Clone the repository.
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   ```
2. Navigate to the project directory.
   ```bash
   cd your-repo-name/client
   ```
3. Install the necessary dependencies.
   ```bash
   npm install
   ```
4. Start the development server.
   ```bash
   npm start
   ```
5. Open your browser and visit `http://localhost:3000` to view the application.

## Deployment
For deployment, consider using platforms like Vercel or Netlify, which integrate seamlessly with React applications.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request if you have suggestions or improvements.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
