import "./editor.css";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";

// function Editor extends Component {

// const Editor ()=>{

const Editor = (props) => {
  const [first, setFirst] = useState("name");
  // constructor(props) {
  //   super(props);
  //   this.state = { editorHtml: "", theme: "snow" };
  //   console.log("Props Editor ", props);
  //   // this.handleChange = this.handleChange.bind(this);
  // }

  // handleChange(html) {
  //   this.setState({ editorHtml: html });
  //   console.log("event.target.value", { editorHtml: html });
  // }

  function handleChange(editor) {
    console.log(editor);
    // props.handleChange = editor;
    // setFirst(editor);
  }
  // props.onChange = first;
  console.log("props.onChange", props.onChange);
  // handleChange(event) {
  //   console.log("event.target.value", event.target.value);
  // }

  return (
    <div>
      <ReactQuill
        // defaultValue={this.props.value}
        onChange={handleChange}
        key={props.id}
        modules={Editor.modules}
        formats={Editor.formats}
        // bounds={props.id}
        placeholder={props.placeholder}
        value={props.body}
      />
    </div>
  );
};

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
Editor.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export default Editor;
