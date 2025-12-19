import "./App.css";
import { useEffect, useState } from "react";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    async function getJoke() {
      const request = await fetch("https://icanhazdadjoke.com/", {
        headers: {
          Accept: "application/json",
        },
      });
      const joke = await request.json();
      setJoke(joke.joke);
    }
    getJoke();
  }, []);

  async function getnewjok() {
    setJoke(null);
    const request = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    const joke = await request.json();
    setJoke(joke.joke);
  }

  return (
    <div className="app">
      <button className="getnewjok" onClick={getnewjok}>
      <i class="fa-solid fa-arrows-rotate"></i>
      </button>
      <div className="joke-container">
        <div className="joke-header">
          <h1 className="joke-title">Daily Dad Joke</h1>
        </div>

        {joke ? (
          <div className="joke-content">
            <div className="joke-text">"{joke}"</div>
          </div>
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </div>
  );
}

export default App;
