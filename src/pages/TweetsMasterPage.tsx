
import { TweetsList } from "../components/TweetsList";
import { TweetsContext } from "../contexts/TweetsContext";
import { useContext } from "react";
import TweetForm from "../components/TweetForm";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

function TweetsMasterPage() {
    const { tweets, addTweet, toggleLike } = useContext(TweetsContext)!;
    const filTweets = tweets.filter(
        (tweet) => tweet.parentId === undefined
    );
    const tweetsTries = [...filTweets].sort((a, b) =>
        b.createdAt.localeCompare(a.createdAt)
    );

    const totalLikes = filTweets.reduce(
        (total, tweet) => total + tweet.likes,
        0
    );
    useDocumentTitle("Accueil");
    return (
        <main>
            <TweetForm onSubmit={addTweet} />
            <p>Nombre de tweets du fil : {filTweets.length}</p>
            <p>Total des J'aime reçus : {totalLikes}</p>
            <TweetsList
                tweets={tweetsTries}
                onToggleLike={toggleLike}
            />
        </main>
    );
}
export default TweetsMasterPage;
