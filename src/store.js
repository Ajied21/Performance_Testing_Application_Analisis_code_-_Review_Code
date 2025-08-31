// src/store.js
let notes = [];
let nextId = 1;

function listNotes() {
  return notes;
}

function getNote(id) {
  return notes.find(n => n.id === Number(id));
}

function createNote({ title, body }) {
  const note = { id: nextId++, title, body };
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

// Fungsi resetStore untuk testing
function resetStore() {
  notes = [];
  nextId = 1;
}

export default {
  listNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
  resetStore,  // <-- tambahkan ini
};

