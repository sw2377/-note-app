import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../store/notebooks";

import NoContents from "./NoContents";
import NoteList from "../componenets/note/NoteList";
import Note from "../componenets/note/Note";

const NoteContainer = () => {
  const { notebooks } = useStore();
  const { notebook, id } = useParams();

  // 선택한 노트북의 노트 리스트 : []
  const notelist = notebooks.filter(each => each.name === notebook)[0]
    ?.notelist;

  // 노트북의 노트리스트 중 선택한 노트
  const selectedNote = () => {
    if (notebook && id) {
      // return notebooks[notebook].find(note => note.id.toString() === id)
      return notelist.find(note => note.id.toString() === id);
    }

    return null;
  };

  return (
    <div className="note_container">
      {/* 노트북에 노트가 없으면 no-contents / 노트가 있으면 notelist 출력 */}
      {notebook && !notelist.length ? (
        <NoContents
          text="노트가 없습니다. 노트를 추가해 주세요."
          link="노트추가하기"
          linkTo={`${notebook}/create`}
        />
      ) : (
        <>
          <NoteList notelist={notelist} />
          {selectedNote() && <Note note={selectedNote()} />}
          {/* <NoteList /> */}
          {/* <Note /> */}
        </>
      )}
    </div>
  );
};

export default NoteContainer;
