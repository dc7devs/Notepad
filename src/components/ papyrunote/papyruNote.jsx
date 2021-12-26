import React, { useState, useRef } from "react"
import { Editor } from "@tinymce/tinymce-react" 

import { RiCloseCircleLine } from "react-icons/ri"

import "./papyruNote.scss"

const PapyruNote = ({ CreateData, content, closePapyru, UpdateData }) => {

    const [contentText, setContentText] = useState(content.contentText)
    
    const editorRef = useRef(null)

    function close () {
        update();
        if (!contentText) {
            closePapyru();
            return;
        }

        if(content.id !== content.id) {
            update();
            
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