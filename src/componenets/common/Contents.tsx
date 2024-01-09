// dummy
const notebooks = ["노트북1", "노트북2"];
// const notebooks = [];

const notelist = ["노트1", "노트2"];
// const notelist = [];

const Contents = () => {
  return (
    <div className="contents">
      {/* Notebooks이 있고, notelist가 있으면 => notelist, note */}
      {/* Notebooks이 있고, notelist가 없으면 => no-contents2 */}
      {/* Notebooks 없으면 => no-contents1 */}

      {notebooks.length && notelist.length ? (
        <>
          <div className="notelist">NOTELIST</div>
          <div className="noteItem">NOTEITEM</div>
        </>
      ) : null}
      {notebooks.length && !notelist.length ? (
        <div className="no-contents2">노트없음 노트생성하기</div>
      ) : null}
      {!notebooks.length ? (
        <div className="no-contents1">노트북없음 노트북만들기</div>
      ) : null}
    </div>
  );
};

export default Contents;
