import React from 'react';
import './App.css'; // Your CSS for specific styles


function App() {
    return (
        <div>
            <header>
                <h1>AN Radio</h1>
                <img src={`${process.env.PUBLIC_URL}/assets/podcast.png`} alt="AN Radio Show Cover" id="show-cover" />
                <p>Hosted by Ali Nasser.</p>
                <nav>
                    <a href="https://alinasser.info">Portfolio</a>
                    <a href="https://music.alinasser.info">Music Career</a>
                    <a href="https://blog.alinasser.info">Blog</a>
                </nav>
            </header>
            <section id="episodes">
                <h2>Latest Episodes</h2>
                <div className="episodes-container">
                    <div className="episode-card">
                        <h3>Episode 1: Intro to AN Radio</h3>
                        <p>In this episode, Ali talks about his vision for AN Radio and what to expect in future episodes.</p>
                        <div className="buttons-wrapper">
                            <a href="https://open.spotify.com/episode/0NOCpsH9rKauUTbJfl5fGD?si=hAq3vlFiSsebsmN9yqDQ0A" target="_blank" rel="noopener noreferrer" className="spotify-btn">Listen on Spotify</a>
                            <a href="https://podcasts.apple.com/sa/podcast/an-radio/id1613191332?i=1000553195921" target="_blank" rel="noopener noreferrer" className="apple-btn">Listen on Apple Podcasts</a>
                        </div>
                    </div>
                    {/* Add more episodes here */}
                </div>
            </section>
            <section id="podcast-embed">
                <h2>Listen on Spotify</h2>
                <div className="embed-wrapper">
                    <iframe src="https://open.spotify.com/embed/show/29QI7M3Q0kS7WEYsLJYns4" width="100%" height="232" frameBorder="0" allowTransparency="true" allow="encrypted-media" title="Spotify Podcast"></iframe>
                </div>

                <h2>Listen on Apple Podcasts</h2>
                <div className="embed-wrapper">
                    <iframe allow="autoplay *; encrypted-media *;" frameBorder="0" height="450" style={{ width: '100%', maxWidth: '660px', overflow: 'hidden', borderRadius: '10px' }} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://embed.podcasts.apple.com/sa/podcast/an-radio/id1613191332" title="Apple Podcast"></iframe>
                </div>
            </section>

            <footer>
                <p>Ali Nasser ™</p>
            </footer>
        </div>
    );
}

export default App;