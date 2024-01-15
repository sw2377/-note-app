import { useStore } from "../store/notebooks";

const useCreateNote = () => {
  const { createNote } = useStore();

  const handleCreateNote = (notebook: string) => {
    const initialContent = JSON.stringify({
      root: {
        children: [
          {
            children: [],
            direction: null,
            format: "",
            indent: 0,
            type: "paragraph",
            version: 1,
          },
        ],
        direction: null,
        format: "",
        indent: 0,
        type: "root",
        version: 1,
      },
    });

    const note = {
      id: Date.now(),
      title: "New Note",
      content: initialContent,
      date: new Date().toLocaleString(),
    };
    createNote(notebook, note);
    return note.id;
  };

  return { handleCreateNote };
};

export default useCreateNote;
