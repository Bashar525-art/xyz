import type { Tweet } from "../types/Tweet";
import type { ReactElement } from "react";
import { TweetPreview } from "./TweetPreview";


export type TweetsListProps = {
    tweets: Array<Tweet>;
    onToggleLike: (id: string) => void;
};

export function TweetsList({ tweets, onToggleLike }: TweetsListProps): ReactElement {
    return (
        <div>
            {tweets.map((tweet) => (
                <TweetPreview
                    key={tweet.id}
                    tweet={tweet}
                    onToggleLike={onToggleLike}
                />
            ))}
        </div>
    );
}