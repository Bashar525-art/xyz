import type { Tweet } from "../types/Tweet";
import type { ReactElement } from "react";
import { TweetPreview } from "./TweetPreview";


export type TweetsListProps = {
    tweets: Array<Tweet>;
};

export function TweetsList({ tweets }: TweetsListProps): ReactElement {
    return (
        <div>
            {tweets.map((tweet) => (
                <TweetPreview key={tweet.id} tweet={tweet} />
            ))}
        </div>
    );
}