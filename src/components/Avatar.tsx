import type { ReactElement } from "react";
import "./Avatar.css";

type AvatarProps = {
    authorName: string;
};

export function Avatar({ authorName }: AvatarProps): ReactElement {

    // On récupère les initiales des deux premiers mots du nom
    const initials = authorName
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((word) => word.charAt(0).toUpperCase())
        .join("");

    return (
        <span className="avatar" aria-hidden="true">
            {initials}
        </span>
    );
}