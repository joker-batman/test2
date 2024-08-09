import React, { useEffect } from 'react';
import './MessagePage.css'; // Import the updated stylesheet

const MessagePage = () => {
  useEffect(() => {
    const audioElement = document.getElementById('backgroundMusic');
    if (audioElement) {
      audioElement.pause();
    }
  }, []);

  return (
    <div className="message-page">
      <header className="message-page-header">
        <h1>Oye Rabbit Happy Birthday</h1>
      </header>
      <main className="message-page-content">
        <div className="images-container">
          {/* Top-left Image */}
          <img src="/images/m1.jpeg" alt="Left" />
          {/* Top-right Image */}
          <img src="/images/m2.jpeg" alt="Right" />
        </div>
        <section className="message message-page-text">
          <div>
            <p>
              First of all Many more happy returns of the day tinkulu🥳🥳.
              And emani rastham entha ani rastham 😂. Do words describe you? (Chusinava em rayalo telvaka itla chestunadu vidu ankukoku). Seriously, One thing for sure is you are always gonna be a special dayyam to me.
            </p>
            <p>
              Even in your difficult times you always hand over the good things first to your close people so never lose that 🫂.
              And every time I remember you, I see a girl who is destined to be achieving greater things. So work hard to be in a position where I should be saying ago ma Chelli ame ani ❤️.
            </p>
            <p>
              I love you tikulu and hope you have a great day.
              I hope every birthday from here on brings you more joy and peace.
              And I hope the other gift was exceptional 😂.
              Chala hopes vadina so fulfill chey avi.
              And finally ivala full enjoy chey and once again Happy Happy Birthday Tinkuluu ❤️.
            </p>
            <p>
              Byeeeeeeeeee.
            </p>
          </div>
        </section>
      </main>
      <footer className="message-page-footer">
        <p>With love from Chintu 🐼</p>
      </footer>
    </div>
  );
};

export default MessagePage;
