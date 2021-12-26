import React, { useState, useRef } from "react"
import { Editor } from "@tinymce/tinymce-react" 

import { RiCloseCircleLine } from "react-icons/ri"

import "./papyruNote.scss"

const PapyruNote = ({ content, closePapyru, UpdateData }) => {
    const editorRef = useRef(null)
    // const log = () => {
    //     if(editorRef.current) {
    //         console.log(editorRef.current.getContent());
    //     }
    // };
    function close () {
        closePapyru();
        update();
    }

    // const [title, setTitle] = useState(content.inputTitle);
    const [contentText, setContentText] = useState(content.contentText)

    let id = content.id
    function update() {
        UpdateData({
            // title,
            contentText,
            id
        })
    }
    // function handleSave() {
    //     update()
    //     // close()
    // }

    return (
        <div className="papyruWidow">
            <Editor
                apiKey='gxp84k8sngseey44nqheo7rh8ih5ssi16cfk1x601a83rihc'
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue={contentText}
                onBlur={() => setContentText(editorRef.current.getContent())}
                init={{
                  height: 450,
                  min_height: 200,
                  menubar: true,
                  resize: false,
                  plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                  ],
                  toolbar: 'undo redo | formatselect | ' +
                  'bold italic backcolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | help',
                  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
            <button
                className="close"
                onClick={close}
            >
                <RiCloseCircleLine />
            </button>
        </div>
    )
}

export default PapyruNote;