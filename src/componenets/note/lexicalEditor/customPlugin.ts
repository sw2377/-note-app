import { useEffect } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

export const OnChangePlugin = ({ onChange, note }) => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      onChange(editorState);
    });
  }, [editor, onChange]);
};

// InitPlugin은 note가 변경될 때만 실행됨
export const InitPlugin = ({ note }) => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    console.log("INIT INIT INIT INIT");
    const editorState = editor.parseEditorState(note.content);
    editor.setEditorState(editorState);
  }, [note, editor]);

  // return null; // InitPlugin 자체는 렌더링에서 제외
};
