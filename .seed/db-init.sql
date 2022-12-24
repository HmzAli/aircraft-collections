/* DB setup */
CREATE SCHEMA airshow;

/* Tables setup */
CREATE TABLE airshow.aircraft (
  id SERIAL,
  name varchar(255) NOT NULL,
  category varchar(255) NOT NULL,
  image TEXT NULL
);


/* Initial data */
INSERT INTO airshow.aircraft VALUES (1, 'P-52 Mustang', 'Fighter', NULL);
