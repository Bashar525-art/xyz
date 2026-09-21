import { initialTweets } from "../data/tweets";
import { TweetsList } from "../components/TweetsList";


function TweetsMasterPage() {
    return (
        <main>
            <TweetsList tweets={initialTweets} />
        </main>
    );
}
export default TweetsMasterPage;