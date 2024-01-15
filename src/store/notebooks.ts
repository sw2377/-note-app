import { create } from "zustand";
import { persist } from "zustand/middleware";

import { NoteType, NotebookType } from "../type/notebookTypes";

interface StoreType {
  notebooks: NotebookType[];
  createNotebook: (name: string) => void;
  removeNotebook: (targetId: number) => void;
  createNote: (notebookName: string, note: NoteType) => void;
  removeNote: (targetId: number) => void;
  saveNote: (targetId: number, title: string, content: string) => void;
}

export const useStore = create<StoreType>()(
  persist(
    set => ({
      notebooks: [],
      createNotebook: name =>
        set(prev => ({
          notebooks: [
            {
              id: Date.now(),
              name,
              notelist: [],
            },
            ...prev.notebooks,
          ],
        })),
      removeNotebook: targetId =>
        set(prev => ({
          notebooks: prev.notebooks.filter(notebook => notebook.id !== targetId),
        })),
      createNote: (notebookName, note) =>
        set(prev => {
          const newNote = {
            ...note,
          };
          const updatedNotebooks = prev.notebooks.map(notebook => {
            if (notebook.name === notebookName) {
              return {
                ...notebook,
                notelist: [newNote, ...notebook.notelist],
              };
            }

            return notebook;
          });

          return {
            notebooks: updatedNotebooks,
          };
        }),
      removeNote: targetId =>
        set(prev => {
          const updatedNotebooks = prev.notebooks.map(notebook => {
            return {
              ...notebook,
              notelist: notebook.notelist.filter(note => note.id !== targetId),
            };
          });

          return {
            notebooks: updatedNotebooks,
          };
        }),
      saveNote: (targetId, title, content) =>
        set(prev => {
          const updatedNotebooks = prev.notebooks.map(notebook => {
            return {
              ...notebook,
              notelist: notebook.notelist.map(note => {
                if (note.id === targetId) {
                  return {
                    ...note,
                    title,
                    content,
                  };
                }
                return note;
              }),
            };
          });

          return {
            notebooks: updatedNotebooks,
          };
        }),
    }),
    {
      name: "NOTE_APP_STORAGE_SW",
    },
  ),
);
