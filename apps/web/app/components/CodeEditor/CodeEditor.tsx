"use client"

import React from 'react'
import Editor from '@monaco-editor/react';

type Props = {}

const CodeEditor = (props: Props) => {
  return (
    <Editor height="90vh" defaultLanguage="javascript" defaultValue="// some comment" />
  )
}

export default CodeEditor