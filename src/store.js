// src/store.js
let notes = [];
let idCounter = 1;

function listNotes() { return notes; }
function getNote(id) { return notes.find(n => n.id === Number(id)) || null; }
function createNote({ title, body }) {
  const note = { id: idCounter++, title, body };
  notes.push(note);
  return note;
}
function updateNote(id, { title, body }) {
  const note = getNote(id);
  if (!note) return null;
  if (title) note.title = title;
  if (body) note.body = body;
  return note;
}
function deleteNote(id) {
  const index = notes.findIndex(n => n.id === Number(id));
  if (index === -1) return false;
  notes.splice(index, 1);
  return true;
}

export default {
  listNotes, getNote, createNote, updateNote, deleteNote
};

