import { initialTweets } from "../data/tweets";
import { TweetsList } from "../components/TweetsList";


function TweetsMasterPage() {
    return (
        <main>
            <TweetsList tweets={initialTweets.filter((tweet) => tweet.parentId === undefined)}
            />

        </main>
    );
}
export default TweetsMasterPage;
