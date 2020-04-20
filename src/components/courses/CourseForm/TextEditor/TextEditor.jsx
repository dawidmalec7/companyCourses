import React, { Component } from 'react'
import { Editor } from 'react-draft-wysiwyg';
import css from './TextEditor.module.scss';

const TextEditor = () => (
    <Editor
      toolbarClassName="toolbarClassName"
      wrapperClassName="wrapperClassName"
      editorClassName={css.editor}
    />
  )

export default TextEditor;