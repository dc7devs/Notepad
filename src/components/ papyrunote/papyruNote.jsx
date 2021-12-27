import React, { useState, useRef } from "react"
import { Editor } from "@tinymce/tinymce-react" 

// import { RiCloseCircleLine } from "react-icons/ri"
import { MdSave } from "react-icons/md"

import "./papyruNote.scss"

const PapyruNote = ({ CreateData, content, closePapyru, UpdateData }) => {

    const [contentText, setContentText] = useState(content.contentText)
    
    const editorRef = useRef(null)

    function closeSave () {
        update();
        if (!contentText) {
            closePapyru();
            return;
        }

        if(content.dateEdition) {
            update();
            closePapyru();
        } else {
            CreateData({
                contentText
            })
            closePapyru();
        }
    }

    let id = content.id
    function update() {
        UpdateData({
            contentText,
            id
        })
    }
    function autoSave() {
        update();
        setContentText(editorRef.current.getContent());
    }

    return (
        <div className="papyruWidow">
            <Editor
                apiKey='gxp84k8sngseey44nqheo7rh8ih5ssi16cfk1x601a83rihc'
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue={contentText}
                onBlur={() => autoSave()}
                init={{
                  resize: false,
                  menubar: true,
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
                onClick={closeSave}
            >
                <MdSave /> 
                {/* <RiCloseCircleLine /> */}
            </button>
        </div>
    )
}

export default PapyruNote;