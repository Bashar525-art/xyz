import { useDocumentTitle } from "../hooks/useDocumentTitle";

function AboutPage() {

    useDocumentTitle("À propos");

    return (
        <section>
            <h2>À propos de XYZ</h2>

            <p>
                XYZ est une application web développée avec React
                et TypeScript dans le cadre du projet individuel
                de Programmation Web en L3 MIASHS.
            </p>

            <p>
                Elle permet de consulter, publier et aimer des tweets.
            </p>
        </section>
    );
}

export default AboutPage;