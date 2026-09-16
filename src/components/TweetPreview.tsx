import type { Tweet } from "../types/Tweet";
import type { ReactElement } from "react";


type TweetPreviewProps = {
    tweet: Tweet;
}

export function TweetPreview({ tweet }: TweetPreviewProps): ReactElement {
    return (
        <div>
            <p>Le nom est {tweet.authorName}</p>
            <p>Le nom d’utilisateur est @{tweet.authorHandle}</p>
            <p>La date est {new Date(tweet.createdAt).toLocaleDateString("fr-FR")}</p>
            <p>Le contenu : {tweet.content}</p>
        </div>
    );
    { tweet.image && <img>src={tweet.image?.url} alt={tweet.image?.alt}</img> }
}
