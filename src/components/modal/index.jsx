import React, { useState, useRef } from "react"
import { Editor } from "@tinymce/tinymce-react"

import { AiOutlineCheck } from "react-icons/ai"
import { BiArrowBack } from "react-icons/bi"
import "./style.scss";

const ModalNote = ({ createData, contentToModal, closeModal, updateData }) => {
    const editorRef = useRef(null);
    const [contentText, setContentText] = useState(contentToModal.contentText);
    const id = contentToModal.id

    function closeAndSave () {
        update();
        if (!contentText) {
            closeModal();
            return;
        }

        if(contentToModal.dateEdition) {
            update();
            closeModal();
        } else {
            createData({
                contentText
            })
            closeModal();
        }
    }
    
    function update() {
        updateData({
            contentText,
            id
        });
    }
    function autoSave() {
        update();
        setContentText(editorRef.current.getContent());
    }

    window.addEventListener("keydown", event => {
        if(event.keyCode === 27) {
            closeModal();
        }
    })

    return (
        <div
            className="modalWidow"
            >
            <span
                className="modalBackground"
                onClick={closeAndSave}
            ></span>
            <nav className="navBarEditor">
                <button
                    className="CalcelButton"
                    onClick={closeModal}
                >
                    <BiArrowBack />
                </button>
                <button
                    className="saveButton"
                    onClick={closeAndSave}
                >
                    <AiOutlineCheck />
                </button>
            </nav>
            <Editor
                // selector='.tinymce'
                apiKey={process.env.REACT_APP_API_KEY}
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue={contentText}
                onBlur={() => autoSave()}
                init={{
                    menubar: false,
                    readonly: true,
                    statusbar: false,
                    resize: false,
                    min_height: 500,
                    selector: "textarea",
                    mobile: {
                        toolbar_mode: 'scrolling'
                    },
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                    'bold italic forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                    placeholder: 'Insira a sua anotação aqui...'
                }}
            />
        </div>
    )
}

export default ModalNote;