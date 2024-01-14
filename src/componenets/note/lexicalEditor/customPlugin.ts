import { useEffect } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { EditorState } from "lexical";
import { NoteType } from "../../../type/notebookTypes";

// OnChangePlugin : editor가 change 될 떄마다 실행
export const OnChangePlugin = ({
  onChange,
}: {
  onChange: (editorState: EditorState) => void;
}) => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      onChange(editorState);
    });
  }, [editor, onChange]);

  return null;
};

// InitPlugin : note에 첫 진입시 초기값 세팅
export const InitPlugin = ({ note }: { note: NoteType }) => {
  const [editor] = useLexicalComposerContext();
  editor.focus();

  useEffect(() => {
    const editorState = editor.parseEditorState(note.content);
    editor.setEditorState(editorState);
  }, [note, editor]);

  return null;
};
