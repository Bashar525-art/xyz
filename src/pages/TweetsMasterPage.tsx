
import { TweetsList } from "../components/TweetsList";
import { TweetsContext } from "../contexts/TweetContext";
import { useContext } from "react";
import TweetFormc from "../compoents/TweetForm";
import { useDocumentTitle } from "../hooks/useDocument";

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
            <TweetFormc onSubmit={addTweet} />
            <p>Total des J'aime reçus : {totalLikes}</p>
            <TweetsList
                tweets={tweets.filter((tweet) => tweet.parentId === undefined)}
                onToggleLike={toggleLike}
            />
        </main>
    );
}
export default TweetsMasterPage;
