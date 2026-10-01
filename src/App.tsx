import { useState } from 'react';
import './App.css'
import { Outlet } from 'react-router-dom';
import type { Tweet } from './types/Tweet';
import { initialTweets } from './data/tweets';
import { TweetsContext, type TweetsContextValue } from './contexts/TweetContext';



function App() {

  //tweets: contient la liste actuelle des tweets
  //setTweets : c'est une fonction qui permet de modifier cette liste
  //initialTweets : nos 10 tweets de tweets.ts

  const [tweets, setTweets] = useState<Array<Tweet>>(initialTweets);

  const addTweet = (content: string): void => {

    const nouveauTweet: Tweet = {
      id: crypto.randomUUID(),  //crypto.randomUUID() : est une fonction qui génère un id unique 
      authorName: "Vous",
      authorHandle: "vous",
      content: content,  //premier content : propriété du Tweet  //2eme content: valeur recue par la fonction
      createdAt: new Date().toISOString(),
      likes: 0,
      likedByMe: false,
    };



    //apres créarion du tweet il faut l'ajouter à la liste
    setTweets((ancienTweets) => [nouveauTweet, ...ancienTweets]);

  };

  // toggleLike sert à aimer ou retirer un j'aime
  const toggleLike = (id: string): void => {
    setTweets((anciensTweets) => {
      return anciensTweets.map((tweet) => {
        if (tweet.id !== id) {
          return tweet;
        }
        return {
          ...tweet,
          likes: tweet.likedByMe ? tweet.likes - 1 : tweet.likes + 1,
          likedByMe: !tweet.likedByMe,
        };

      });
    });
  };
  const context: TweetsContextValue = { tweets, addTweet, toggleLike };
  return (

    <main>
      <header className="app-header">
        <img
          src="/xyz-logo.png"
          alt="Logo de XYZ"
          className="app-logo"
        />
        <h1>XYZ — Fil de tweets</h1>
      </header>
      <TweetsContext.Provider value={context}>
        <Outlet />
      </TweetsContext.Provider>

    </main>
  );

}

export default App;


