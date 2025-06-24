-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           8.4.5 - MySQL Community Server - GPL
-- OS do Servidor:               Linux
-- HeidiSQL Versão:              12.11.0.7065
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para azcursos
CREATE DATABASE IF NOT EXISTS `azcursos` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `azcursos`;

-- Copiando estrutura para tabela azcursos.cursos
CREATE TABLE IF NOT EXISTS `cursos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `descricao` text NOT NULL,
  `capa` varchar(255) DEFAULT NULL,
  `inicio` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela azcursos.cursos: ~3 rows (aproximadamente)
INSERT INTO `cursos` (`id`, `nome`, `descricao`, `capa`, `inicio`) VALUES
	(1, 'NodeJs e SQL', 'Programação back-end com Javascript (nodeJS) e banco de dados realcional MySQL', 'nova_capa4.png', '2025-05-28'),
	(2, 'JAVA', 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado.', 'https://user-images.githubusercontent.com/4727/38117898-75c704e4-336c-11e8-82bb-dffd73f55e94.png', '2025-06-24'),
	(3, 'PHP', 'https://user-images.githubusercontent.com/4727/38117898-75c704e4-336c-11e8-82bb-dffd73f55e94.png', 'https://user-images.githubusercontent.com/4727/38117898-75c704e4-336c-11e8-82bb-dffd73f55e94.png', '2025-06-24');

-- Copiando estrutura para tabela azcursos.inscricoes
CREATE TABLE IF NOT EXISTS `inscricoes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int NOT NULL,
  `curso_id` int NOT NULL,
  `data_inscricao` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `data_cancelamento` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `usuario_id` (`usuario_id`,`curso_id`),
  KEY `curso_id` (`curso_id`),
  CONSTRAINT `inscricoes_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `inscricoes_ibfk_2` FOREIGN KEY (`curso_id`) REFERENCES `cursos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela azcursos.inscricoes: ~4 rows (aproximadamente)
INSERT INTO `inscricoes` (`id`, `usuario_id`, `curso_id`, `data_inscricao`, `data_cancelamento`) VALUES
	(1, 2, 1, '2025-06-24 20:19:44', NULL),
	(2, 3, 2, '2025-06-24 20:19:52', NULL),
	(3, 5, 3, '2025-06-24 20:20:04', NULL),
	(4, 4, 2, '2025-06-24 20:20:16', NULL);

-- Copiando estrutura para tabela azcursos.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `nascimento` date NOT NULL,
  `criado_em` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Copiando dados para a tabela azcursos.usuarios: ~5 rows (aproximadamente)
INSERT INTO `usuarios` (`id`, `nome`, `email`, `senha`, `nascimento`, `criado_em`) VALUES
	(1, 'Paulo Souza', 'paulo@mail.com', '$2b$10$rwmwzHyxUdHeOTV5QDnPAuhfxVzvDyHFqkiwyIB9g4uQtFAuvqxxO', '1987-08-27', '2025-06-04 00:09:09'),
	(2, 'Joao', 'joao@mail.com', '$2b$10$VPZMbpf0G8ANZ2qshum38OrVlZujzwSd4AYFH0trpMvWx6hIsUG7m', '1987-08-27', '2025-06-04 00:41:49'),
	(3, 'Pedro', 'pedro3@mail.com', '$2b$10$1miqJQLkmsEL1CB7tR44ZejKr9LL/IwUxti1E0O/iPhqHes8ealki', '1987-12-01', '2025-06-04 00:42:36'),
	(4, 'Maria', 'maria@mail.com', '$2b$10$Tt9mxDJxr2T9urK5Hkp/7OW44kCgExjt1z5ImKjT.MJJP5biiB2ou', '1987-12-01', '2025-06-04 01:02:07'),
	(5, 'Caio', 'caio@mail.com', '$2b$10$j6YK/T25l0Z9g/piovKCLuMiO419WVxG7MZOyB3tFQH17Ksg8zUCa', '2022-12-12', '2025-06-04 01:10:48');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
