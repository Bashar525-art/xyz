import type { ReactElement } from "react";
import "./Avatar.css";

type AvatarProps = {
    authorName: string;
};

export function Avatar({ authorName }: AvatarProps): ReactElement {

    // On récupère les initiales des deux premiers mots du nom
    const initials = authorName
        .trim() // Supprime les espaces au début et à la fin du nom
        .split(/\s+/) // Sépare le nom en plusieurs mots 
        .slice(0, 2)  //Garde uniquement les deux premiers mots
        .map((word) => word.charAt(0).toUpperCase()) // Prend la première lettre de chaque mot et la met en majuscule
        .join(""); // Regroupe les lettres sans espace

    return (

        // aria-hidden évite que les initiales soient lues en double par un lecteur
        <span className="avatar" aria-hidden="true">
            {initials}
        </span>
    );
}