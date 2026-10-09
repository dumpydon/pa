-- Anonymous browser identifiers only; no IP addresses or personal information.
CREATE TABLE visitors (
  id_hash TEXT PRIMARY KEY NOT NULL CHECK (length(id_hash) = 64)
) WITHOUT ROWID;

CREATE TABLE visitor_total (
  id INTEGER PRIMARY KEY CHECK (id = 1),
  total INTEGER NOT NULL DEFAULT 0 CHECK (total >= 0)
);

INSERT INTO visitor_total (id, total) VALUES (1, 0);

-- The unique key and trigger make concurrent/repeated requests count once.
CREATE TRIGGER increment_visitor_total
AFTER INSERT ON visitors
BEGIN
  UPDATE visitor_total SET total = total + 1 WHERE id = 1;
END;
