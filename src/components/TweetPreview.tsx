import type { Tweet } from "../types/Tweet";
import type { ReactElement } from "react";
import "./TweetPreview.css";

type TweetPreviewProps = {
    tweet: Tweet;
}

export function TweetPreview({ tweet }: TweetPreviewProps): ReactElement {
    return (
        <div>
            <p>Le nom est {tweet.authorName}</p>
            <p>Le nom d’utilisateur est @{tweet.authorHandle}</p>
            <p>La date est {new Date(tweet.createdAt).toLocaleDateString("fr-FR")}</p>
            {
                tweet.image && (
                    <img className="tweet-image" src={tweet.image.url} alt={tweet.image.alt} />)
            }

            <p>Le contenu : {tweet.content}</p>


        </div>
    );

}