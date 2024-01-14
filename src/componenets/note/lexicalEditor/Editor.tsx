import { useState } from "react";
import { useStore } from "../../../store/notebooks";
import { NoteType } from "../../../type/notebookTypes";
import { OnChangePlugin, InitPlugin } from "./customPlugin";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

const theme = {
  paragraph: "editor-paragraph",
};

// COMPONENT :: Editor
const Editor = ({ note }: { note: NoteType }) => {
  const [editorState, setEditorState] = useState(""); // 현재 에디터의 글이 저장되어 있음.

  const { saveNote } = useStore();

  const [titleNode, setTitleNode] = useState("");
  const [contentNode, setContentNode] = useState("");

  const [autoSaveTimer, setAutoSaveTimer] = useState(null);

  function onChange(editorState) {
    const editorStateJSON = editorState.toJSON();
    setEditorState(JSON.stringify(editorStateJSON));

    console.log("editorState", editorState);

    // 제목과 내용 찾기
    const textNodes = Array.from(editorState._nodeMap.values()).filter(
      node => node.__type === "text",
    );
    const titleNode = textNodes[0]?.__text ?? null;
    const contentNode = textNodes[1]?.__text;
    console.log(`제목:: ${titleNode} || 내용:: ${contentNode}`);
    setTitleNode(titleNode);
    setContentNode(contentNode);

    // console.log("자동저장 ::: ", note.id, titleNode, JSON.stringify(editorState.toJSON()))
    // saveNote(note.id, titleNode, JSON.stringify(editorState.toJSON()))
    // 자동 저장 타이머 시작 또는 재설정
    if (autoSaveTimer) {
      clearTimeout(autoSaveTimer);
    }

    const newAutoSaveTimer = setTimeout(() => {
      // saveNote: (noteId, title, content)
      console.log(
        "자동저장 ::: ",
        note.id,
        titleNode,
        JSON.stringify(editorState.toJSON()),
      );
      // saveNote(note.id, titleNode, JSON.stringify(editorState.toJSON()))
    }, 3000); // 3초마다 자동 저장 (원하는 시간으로 조절 가능)

    setAutoSaveTimer(newAutoSaveTimer);
  }

  function onError(error) {
    console.log(error);
  }

  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError,
  };

  return (
    <div className="editorWrapper">
      <LexicalComposer initialConfig={initialConfig}>
        <PlainTextPlugin
          contentEditable={<ContentEditable className="contentEditable" />}
          placeholder={<div className="placeholder">Enter some text...</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <OnChangePlugin onChange={onChange} note={note} />
        {/* <OnUpdatePlugin note={note} /> */}
        <InitPlugin note={note} />
        {/* <CustomStylePlugin /> */}
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
    </div>
  );
};

export default Editor;
