import { Link, useParams } from "react-router-dom";
import { initialTweets } from "../data/tweets";
import { TweetPreview } from "../components/TweetPreview";
import { TweetsList } from "../components/TweetsList";



function TweetDetailsPage() {


    const { id } = useParams<{ id: string }>();
    const tweet = initialTweets.find((tweet) => tweet.id === id);
    const reponseTweet = initialTweets.filter((reponseTweet) => reponseTweet.parentId === id);



    if (!tweet) {
        return (<div>
            <p>Ce tweet n'existe pas</p>
            <p> <Link to={"/"}> Page principale </Link> </p>
        </div>);
    };


    return (<div>
        <TweetPreview tweet={tweet} linkToDetail={false} />


        {reponseTweet.length === 0


            ? <p>la list est vide</p>
            : <TweetsList tweets={reponseTweet} />
        }

    </div>
    )
};




export default TweetDetailsPage;


//useParams() : récupère les paramètres de l'URL

//tweet.id === id : Est-ce que ce tweet est celui demandé dans l'URL ?