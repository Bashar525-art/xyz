import type { Tweet } from "../types/Tweet";
import type { ReactElement } from "react";
import "./TweetPreview.css";
import { useState } from "react";

type TweetPreviewProps = {
    tweet: Tweet;

}


export function TweetPreview({ tweet }: TweetPreviewProps): ReactElement {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div>
            <p>Le nom est {tweet.authorName}</p>
            <p>Le nom d’utilisateur est @{tweet.authorHandle}</p>
            <p>La date est {new Date(tweet.createdAt).toLocaleDateString("fr-FR")}</p>
            {
                tweet.image && (
                    <img className="tweet-image" src={tweet.image.url} alt={tweet.image.alt} />)
            }

            <p> Le contenu : {isExpanded ? tweet.content : tweet.content.slice(0, 180)}</p>
            {tweet.content.length > 180 && (
                <button type="button"
                    onClick={() => setIsExpanded((previous) => !previous)}>
                    {isExpanded ? "Voir moins" : "Voir plus"}</button>
            )}

        </div>
    );

}