-- create_database_and_table.sql

CREATE DATABASE IF NOT EXISTS contact_form_portfolio;

USE contact_form_portfolio;

CREATE TABLE IF NOT EXISTS portfolio (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    message TEXT NOT NULL
);
