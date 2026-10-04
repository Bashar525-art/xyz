
import { TweetsList } from "../components/TweetsList";
import { TweetsContext } from "../contexts/TweetsContext";
import { useContext } from "react";
import TweetForm from "../components/TweetForm";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

function TweetsMasterPage() {
    // On récupère les tweets et les fonctions partagées depuis le contexte
    const { tweets, addTweet, toggleLike } = useContext(TweetsContext)!;
    // On garde uniquement les tweets principaux (sans les réponses)
    const filTweets = tweets.filter(
        (tweet) => tweet.parentId === undefined
    );

    // On crée une copie du tableau avec ... pour ne pas modifier l'original
    // Puis on trie les tweets du plus récent au plus ancien grâce à leur date
    const tweetsTries = [...filTweets].sort((a, b) =>
        b.createdAt.localeCompare(a.createdAt)
    );
    // On calcule le nombre total de likes des tweets du fil
    // reduce parcourt le tableau et additionne les likes de chaque tweet
    // Le 0 représente la valeur de départ du total
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
