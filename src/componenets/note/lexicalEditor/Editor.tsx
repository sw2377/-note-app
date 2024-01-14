import { useState, useEffect } from "react";
import { useStore } from "../../../store/notebooks";
import styled from "styled-components";
import { NoteType } from "../../../type/notebookTypes";
import { OnChangePlugin, InitPlugin } from "./customPlugin";

import { EditorState } from "lexical";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

const Editor = ({ note }: { note: NoteType }) => {
  const { saveNote } = useStore();

  const [editorState, setEditorState] = useState(""); // JSON 형태로 저장된 editorState(현재 에디터의 글)이
  const [titleNode, setTitleNode] = useState("");

  // const [isContentModified, setIsContentModified] = useState(false);
  // const [autoSaveTimer, setAutoSaveTimer] = useState(null);

  // useEffect(() => {
  //   const autoSaveInterval = setInterval(() => {
  //     saveNote(note.id, titleNode, editorState);
  //     console.log("Auto-save:", titleNode, editorState);
  //     // setIsContentModified(false);
  //   }, 3000);

  //   return () => clearInterval(autoSaveInterval);
  // }, [note.id, titleNode, editorState, saveNote]);

  function onChange(editorState: EditorState) {
    // _EditorState(editor의 contents)를 editorState에 JSON 형태로 저장
    const editorStateJSON = editorState.toJSON();
    setEditorState(JSON.stringify(editorStateJSON));

    // editorState의 제목은 첫번째 textNode
    const textNodes = Array.from(editorState._nodeMap.values()).filter(
      node => node.__type === "text",
    );
    const titleNode: string = textNodes[0]?.__text ?? null;
    setTitleNode(titleNode);

    // const newTitleNode = textNodes[0]?.__text ?? null;

    // if (newTitleNode !== titleNode || isContentModified) {
    //   setTitleNode(newTitleNode);
    //   setIsContentModified(true);
    // }

    // // console.log("자동저장 ::: ", note.id, titleNode, JSON.stringify(editorState.toJSON()))
    // // saveNote(note.id, titleNode, JSON.stringify(editorState.toJSON()))
    // // 자동 저장 타이머 시작 또는 재설정
    // if (autoSaveTimer) {
    //   clearTimeout(autoSaveTimer);
    // }

    // const newAutoSaveTimer = setTimeout(() => {
    //   // saveNote: (noteId, title, content)
    //   console.log(
    //     "자동저장 ::: ",
    //     note.id,
    //     titleNode,
    //     JSON.stringify(editorState.toJSON()),
    //   );
    //   // saveNote(note.id, titleNode, JSON.stringify(editorState.toJSON()))
    // }, 3000);

    // setAutoSaveTimer(newAutoSaveTimer);
  }

  const initialConfig = {
    namespace: "MyNoteEditor",
    theme: { paragraph: "editor-paragraph" },
    onError(error: Error) {
      console.log(error);
    },
  };

  return (
    <EditorWrapper>
      <LexicalComposer initialConfig={initialConfig}>
        <PlainTextPlugin
          contentEditable={<ContentEditable className="contentEditable" />}
          placeholder={<div className="placeholder">Enter some text...</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <OnChangePlugin onChange={onChange} />
        <InitPlugin note={note} />
      </LexicalComposer>
      {/* 저장하기 버튼 (임시) */}
      <button
        onClick={() => {
          // saveNote: (noteId, title, content)
          saveNote(note.id, titleNode, editorState);
          console.log("저장하기 버튼 클릭 ::: ", titleNode, editorState);
        }}
      >
        저장하기
      </button>
    </EditorWrapper>
  );
};

const EditorWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  padding: 12px 20px;
  flex-grow: 8;

  & .contentEditable {
    width: 100%;
    height: 100%;
    outline: none;

    & .editor-paragraph {
      /* color: grey; */

      & > span:nth-of-type(1) {
        display: inline-block;
        padding: 16px 0;
        font-size: 2.2rem;
        font-weight: 600;
      }
    }
  }

  & .placeholder {
    position: absolute;
    /* top: 28px; */
    top: 12px;
    color: var(--color-gray);
    /* font-size: 2.2rem; */
  }
`;

export default Editor;
