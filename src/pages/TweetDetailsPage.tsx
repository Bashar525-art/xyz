import { Link, useParams } from "react-router-dom";
import { TweetPreview } from "../components/TweetPreview";
import { TweetsList } from "../components/TweetsList";
import { useContext } from "react";
import { TweetsContext } from "../contexts/TweetsContext";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

function TweetDetailsPage() {

    const { tweets, toggleLike } = useContext(TweetsContext)!;

    // Récupère l'identifiant du tweet directement depuis l'URL
    const { id } = useParams<{ id: string }>();
    const tweet = tweets.find((tweet) => tweet.id === id);
    // Modifie le titre de l'onglet selon que le tweet existe ou non
    // Le hook est appelé avant le if pour respecter les règles de React
    useDocumentTitle(
        tweet ? `Tweet de ${tweet.authorName}` : "Tweet introuvable"
    );
    const reponseTweet = tweets.filter((reponseTweet) => reponseTweet.parentId === id);



    if (!tweet) {
        return (<div>
            <p>Ce tweet n'existe pas</p>
            <p> <Link to={"/"}> Page principale </Link> </p>
        </div>);
    };


    return (<div>
        <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link to="/">Accueil</Link>

            {/* Séparateur entre l'accueil et la page actuelle */}
            <span aria-hidden="true"> › </span>

            {/* aria-current indique qu'il s'agit de la page actuelle */}
            <span aria-current="page">
                Tweet de {tweet.authorName}
            </span>
        </nav>
        <TweetPreview
            tweet={tweet}
            linkToDetail={false}
            onToggleLike={toggleLike}
        />


        {reponseTweet.length === 0


            ? <p>la list est vide</p>
            : <TweetsList
                tweets={reponseTweet}
                onToggleLike={toggleLike}
            />
        }

    </div>
    )
};




export default TweetDetailsPage;


//useParams() : récupère les paramètres de l'URL

//tweet.id === id : Est-ce que ce tweet est celui demandé dans l'URL ?