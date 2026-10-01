import { useState, type SubmitEvent } from "react";


const CONTENT_MAX_LENGTH = 280;


type TweetFormProps = {
    onSubmit: (content: string) => void;
};



function TweetForm({ onSubmit }: TweetFormProps) {


    // une variable pour mémoriser le text
    const [content, setContent] = useState<string>("");
    const nbRestant = CONTENT_MAX_LENGTH - content.length;



    // une fonction sert à gérer ce qui se passe quand l'utilisateur soumet le formulaire 
    const handleSubmit = (event: SubmitEvent<HTMLFormElement>): void => {
        event.preventDefault(); // pour epecher la soumission habituelle du navigateur qui pourrait provoquer un rechargement de la page 

        const textNettoye = content.trim();
        onSubmit(textNettoye);
        setContent("");
    }




    return (
        <form className="tweet-form" onSubmit={handleSubmit}>


            { /* un champ contrôlé */}
            {/*  value={content}  //le text affiché dans le champ correspods à la valeur de content*/}
            {/* // onChange sert à détcter quand l'utilisateur modifie la valeur d'un champ  */}
            {/* //setContent enregistre la nouvelle valeur   */}

            <textarea
                value={content}

                onChange={(event) => setContent(event.target.value)}
                maxLength={CONTENT_MAX_LENGTH}

            />
            <p>il vous reste {nbRestant} caracteres </p>

            <button type="submit"
                disabled={ //détermine si le bouton est désactivé
                    content.trim() === "" ||
                    content.length > CONTENT_MAX_LENGTH
                }
            >

                Publier

            </button>
        </form>
    );



};
export default TweetForm;