-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema zara
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema zara
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `zara` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `zara` ;

-- -----------------------------------------------------
-- Table `zara`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zara`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `gender` VARCHAR(45) NOT NULL,
  `category` VARCHAR(255) NOT NULL,
  `quantity` INT NOT NULL,
  `price` INT NOT NULL,
  `image` VARCHAR(500) NOT NULL,
  `description` VARCHAR(500) CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_0900_ai_ci' NOT NULL,
  `createdAt` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 121
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `zara`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zara`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `emailConfirmed` TINYINT NOT NULL DEFAULT '0',
  `isAdmin` TINYINT NOT NULL DEFAULT '0',
  `createdAt` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 15
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `zara`.`cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zara`.`cart` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `products_id` INT NOT NULL,
  `createdAt` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_user_has_products_products1_idx` (`products_id` ASC) VISIBLE,
  INDEX `fk_user_has_products_user_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_has_products_products1`
    FOREIGN KEY (`products_id`)
    REFERENCES `zara`.`products` (`id`),
  CONSTRAINT `fk_users_has_products_users`
    FOREIGN KEY (`user_id`)
    REFERENCES `zara`.`users` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 10
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `zara`.`help`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `zara`.`help` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `question` VARCHAR(255) NOT NULL,
  `answer` VARCHAR(255) NOT NULL,
  `createdAt` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

INSERT INTO `zara`.`users` (`firstname`, `lastname`, `email`, `password`, `emailConfirmed`, `isAdmin`) 
VALUES ('admin', 'admin', 'admin@gmail.com', 'admin', 1, 1);