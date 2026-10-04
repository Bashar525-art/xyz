import { useEffect } from "react";


// Hook personnalisé qui permet de modifier le titre de l'onglet du navigateur
export function useDocumentTitle(title: string): void {
    // useEffect permet d'exécuter une action après le rendu du composant
    useEffect(() => {
        document.title = `${title} | XYZ`;
    }, [title]); // L'effet est relancé uniquement lorsque title change
}