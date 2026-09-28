import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <main>
            <p>Page introuvable</p>
            <Link to={"/"} > Retour à l'accueil </Link>
        </main>
    );
}
export default NotFoundPage;