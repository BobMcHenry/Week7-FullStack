CREATE DATABASE IF NOT EXISTS full_stack_db;
USE full_stack_db;
CREATE TABLE fs_data (
    id int NOT NULL AUTO_INCREMENT,
    contact_name varchar(255) NOT NULL,
    -- 1-555-555-5555 Phone numbers should be formatted with country code, area code, and number seperated by dashes
    phone varchar(14),
    email varchar(255),
    PRIMARY KEY (id)
);

INSERT INTO fs_data (contact_name, phone, email) VALUES ('Moe', "1-206-111-5555", "Moe@demodb.com");
INSERT INTO fs_data (contact_name, phone, email) VALUES ('Larry', "1-206-222-5555", "Larry@demodb.com");
INSERT INTO fs_data (contact_name, phone, email) VALUES ('Curly', "1-206-333-5555", "Curly@demodb.com");
INSERT INTO fs_data (contact_name, phone, email) VALUES ('Beans', "1-206-444-5555", "Beans@demodb.com");
INSERT INTO fs_data (contact_name, phone, email) VALUES ('Dave', "1-206-555-5555", "Dave@demodb.com");
