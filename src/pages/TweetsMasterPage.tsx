
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

    const totalLikes = filTweets.reduce(
        (total, tweet) => total + tweet.likes,
        0
    );
    useDocumentTitle("Accueil");
    return (
        <main>
            <TweetForm onSubmit={addTweet} />
            <p>Total des J'aime reçus : {totalLikes}</p>
            <TweetsList
                tweets={filTweets}
                onToggleLike={toggleLike}
            />
        </main>
    );
}
export default TweetsMasterPage;
