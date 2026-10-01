import { createContext } from "react";
import type { Tweet } from "../types/Tweet";



export type TweetsContextValue = {
    tweets: Array<Tweet>;
    addTweet: (content: string) => void;
    toggleLike: (id: string) => void;
};
// on crée TweetsContext qui pourra contenir les tweets ou rien et la valeur de départ est undefined
export const TweetsContext = createContext<TweetsContextValue | undefined>(
    undefined,
);
