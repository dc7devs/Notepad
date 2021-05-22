import React from "react";

import { HiTrash } from "react-icons/hi";

const NoteContent = ({ noteContent }) => {
    return (
        <>
            <div 
                className="note-box"
            >
                <div 
                    className="title"
                >
                    <p >
                        {/* 
                            Os nomes das propriedades tbm estavam errados. 
                            Dá uma olhada em https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
                            ou da uma olhada no TypeScript https://www.typescriptlang.org/, o create-react-app ja tem
                            templates prontos pra typescript, ent se vc quiser começar a usar é bem facinho.
                        */}
                        {noteContent.inputTitle}
                    </p>
                    <button 
                        className="trash"
                    >
                        <HiTrash />
                    </button>
                </div>

                <p className="textPreview">
                    {/* 
                        Os nomes das propriedades tbm estavam errados. 
                        Dá uma olhada em https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
                        ou da uma olhada no TypeScript https://www.typescriptlang.org/, o create-react-app ja tem
                        templates prontos pra typescript, ent se vc quiser começar a usar é bem facinho.
                    */}
                    {noteContent.inputText}
                </p>

                <div className="lastEditionTimeBox">
                    <p className="lastEditionTime">21/05/2021 às 12:51</p>
                </div>
            </div>
        </>
    )
}

export default NoteContent;