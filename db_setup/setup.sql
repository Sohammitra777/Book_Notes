-- Books Database
CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  rating INT NOT NULL
);

-- Notes Database
CREATE TABLE notes (
  id SERIAL PRIMARY KEY,
  note_id INT REFERENCES books(id) ON DELETE CASCADE,
  note TEXT NOT NULL
);