DROP DATABASE IF EXISTS typoteka_db;
DROP ROLE IF EXISTS typoteka_user;

CREATE ROLE typoteka_user WITH
  LOGIN
  NOSUPERUSER
  NOCREATEDB
  NOCREATEROLE
  INHERIT
  NOREPLICATION
  CONNECTION LIMIT -1
  PASSWORD 'typoteka_pass';

CREATE DATABASE typoteka_db
  WITH
  OWNER = typoteka_user
  ENCODING = 'UTF8'
  CONNECTION LIMIT = -1;

-- psql -h localhost -d postgres -U postgres <
-- psql -h localhost -d typoteka_db -U typoteka_user <
