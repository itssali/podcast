# AN Radio Podcast Page

This is the podcast page for AN Radio, showcasing episodes and providing easy access to Spotify and Apple Podcasts platforms.

## Features
- Embedded Spotify player and Apple Podcasts player.
- Section for displaying latest episodes.
- Clean and modern design.
- Responsive layout for both desktop and mobile.

## Structure

### HTML (index.html)
- The main structure of the page including:
  - Header with title and brief introduction.
  - Embedded players for Spotify and Apple Podcasts.
  - Section for the latest episodes with buttons linking to respective platforms.
  - Footer with social links.

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
1. In the HTML file, locate the `#episodes` section.
2. Add new episode cards within the `<div class="episodes-container">`.
3. Follow the format for an episode card:
   ```html
   <div class="episode-card">
       <h3>Episode Title</h3>
       <p>Description of the episode.</p>
       <a href="spotify_episode_link" target="_blank" class="spotify-btn">Listen on Spotify</a>
       <a href="apple_episode_link" target="_blank" class="apple-btn">Listen on Apple Podcasts</a>
   </div>
