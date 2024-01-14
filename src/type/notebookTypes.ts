export interface NoteType {
  id: number;
  title: string;
  content: string;
  date: Date;
}

export interface NotebookType {
  id: number;
  name: string;
  notelist: NoteType[];
}
