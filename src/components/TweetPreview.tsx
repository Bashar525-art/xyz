import type { Tweet } from "../types/Tweet";
import type { ReactElement } from "react";
import "./TweetPreview.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";


type TweetPreviewProps = {
    tweet: Tweet;
    linkToDetail?: boolean;
    onToggleLike: (id: string) => void;

};


export function TweetPreview({ tweet, linkToDetail = true, onToggleLike }: TweetPreviewProps): ReactElement {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div className="tweet-card">
            <div className="tweet-author">
                <Avatar authorName={tweet.authorName} />
                <p>Le nom est {tweet.authorName}</p>
            </div>
            <p>Le nom d’utilisateur est @{tweet.authorHandle}</p>
            <p>La date est {new Date(tweet.createdAt).toLocaleDateString("fr-FR")}</p>
            {linkToDetail && (
                <Link to={"/tweets/" + tweet.id}> Voir la discussion</Link>
            )}
            {tweet.image && (  //si l'image existe , on regarde si linkToDetail existe si oui avec link sinon sans link 
                linkToDetail
                    ? (
                        <Link to={"/tweets/" + tweet.id}>
                            <img
                                className="tweet-image"
                                src={tweet.image.url}
                                alt={tweet.image.alt}
                            />
                        </Link>
                    )
                    : (
                        <img
                            className="tweet-image"
                            src={tweet.image.url}
                            alt={tweet.image.alt}
                        />
                    )
            )}

            <p> Le contenu : {isExpanded ? tweet.content : tweet.content.slice(0, 180)}</p>
            {tweet.content.length > 180 && (
                <button type="button"
                    onClick={() => setIsExpanded((previous) => !previous)}>
                    {isExpanded ? "Voir moins" : "Voir plus"}</button>


            )}
            <button
                type="button"
                onClick={() => onToggleLike(tweet.id)}
            >
                {tweet.likedByMe ? "Je n'aime plus" : "J'aime"} ({tweet.likes})
            </button>
        </div>
    );

}
