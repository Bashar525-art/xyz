import './App.css'
import { initialTweets } from "./data/tweets";
import { TweetsList } from "./components/TweetsList";

function App() {


  return (

    <main>
      <h1>XYZ — Fil de tweets</h1>
      <TweetsList tweets={initialTweets} />
    </main>
  );

}

export default App
