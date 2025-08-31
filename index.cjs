// index.js
import app from './src/app.js';  // pastikan src/app.js juga pakai export default

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`notes-app listening on :${PORT}`));

