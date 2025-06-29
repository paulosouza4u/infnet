-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.4.5 - MySQL Community Server - GPL
-- Server OS:                    Linux
-- HeidiSQL Version:             12.11.0.7065
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for azcursos
CREATE DATABASE IF NOT EXISTS `azcursos` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `azcursos`;

-- Dumping structure for table azcursos.cursos
CREATE TABLE IF NOT EXISTS `cursos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `descricao` text COLLATE utf8mb4_general_ci NOT NULL,
  `capa` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `inicio` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table azcursos.cursos: ~7 rows (approximately)
INSERT INTO `cursos` (`id`, `nome`, `descricao`, `capa`, `inicio`) VALUES
	(1, 'JAVA e Spring', 'O curso Java visa ensinar a linguagem de programação Java, abordando desde os conceitos básicos até tópicos mais avançados, como orientação a objetos e frameworks como Spring. O objetivo é capacitar o aluno a desenvolver aplicações robustas, seja para desktop, web ou dispositivos móveis, além de prepará-lo para o mercado de trabalho.', 'https://ant.ncc.asia/wp-content/uploads/2024/05/java.png', '2025-06-01 13:00:00'),
	(2, 'PHP', 'O curso de PHP ensina a desenvolver aplicações web usando a linguagem PHP, focando em criação de scripts no lado do servidor e interação com bancos de dados. É uma habilidade essencial para desenvolvedores web que buscam criar sites dinâmicos e interativos.', 'https://becode.com.br/wp-content/uploads/2017/09/php-post-1.png', '2025-06-08 13:10:00'),
	(3, 'Python', 'O curso de Python pode ser encontrado em diversas plataformas e instituições, tanto online quanto presenciais, com opções que vão desde o nível básico até o avançado. A linguagem Python é popular devido à sua sintaxe simples e versatilidade, sendo utilizada em diversas áreas como desenvolvimento web, ciência de dados e machine learning.', 'https://beecrowd.com/wp-content/uploads/2024/04/2022-07-19-Melhores-cursos-de-Python.jpg', '2025-05-12 12:00:00'),
	(4, 'SQL', 'Entender a diferença entre um Administrador de Dados e um DBA. Instalar o Banco de Dados MySql. Criar bancos de dados consistentes do ponto de infraestrutura e modelagem. Executar a linguagem SQL - Structured Query Language, ou Linguagem de Consulta Estruturada em QUALQUER banco de dados. Instalar o Banco de Dados Oracle. Entender todo o ambiente trasacional e optar por continuar seus estudos em ambientes analíticos de Business Intelligence. Realizar Backups e Restores dos seus Bancos de Dados.', 'https://storage.googleapis.com/medium-feed.appspot.com/images%2F9353691196%2Fbf0353ae89496-O-que-e-SQL-Server.jpg', '2025-04-29 10:30:00'),
	(5, 'API REST', 'O curso de API REST ensina a construir e consumir APIs seguindo o estilo arquitetural REST, que usa o protocolo HTTP para comunicação entre cliente e servidor. Esses cursos abordam desde os fundamentos da arquitetura REST até a implementação de rotas, métodos HTTP e autenticação. Eles são úteis para desenvolvedores que desejam criar serviços web, aplicativos móveis e sistemas distribuídos.', 'https://appmaster.io/api/_files/PqV7MuNwv89GrZvBd4LNNK/download/', '2025-04-15 10:00:00'),
	(6, 'HTML e CSS', 'O curso de HTML ensina a linguagem de marcação fundamental para a criação de páginas web. Ele cobre a estrutura básica de um site, incluindo como adicionar texto, links, imagens, vídeos e outros elementos. Além do HTML, o curso também abordam CSS (para estilização) e JavaScript (para interatividade), formando a base do desenvolvimento front-end.', 'https://cdn-jghdn.nitrocdn.com/WaAKrPwVavvRtmiuchNkiowpZvENVGmM/assets/images/optimized/rev-f477451/www.homehost.com.br/blog/wp-content/uploads/2019/07/htmlcssjs.jpg', '2025-05-16 11:20:00'),
	(7, 'React JS', 'O curso de React JS ensina a usar a biblioteca JavaScript do Facebook para criar interfaces de usuário interativas e dinâmicas para aplicações web. O curso aborda a criação de componentes reutilizáveis, manipulação de estados, e como trabalhar com o JSX, entre outros tópicos essenciais para o desenvolvimento front-end moderno. ', 'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fa24e2stztd1g72gvk23h.png', '2025-06-02 19:00:00');

-- Dumping structure for table azcursos.inscricoes
CREATE TABLE IF NOT EXISTS `inscricoes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int DEFAULT NULL,
  `curso_id` int DEFAULT NULL,
  `data_inscricao` datetime NOT NULL,
  `data_cancelamento` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  KEY `curso_id` (`curso_id`),
  CONSTRAINT `inscricoes_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `inscricoes_ibfk_2` FOREIGN KEY (`curso_id`) REFERENCES `cursos` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table azcursos.inscricoes: ~2 rows (approximately)
INSERT INTO `inscricoes` (`id`, `usuario_id`, `curso_id`, `data_inscricao`, `data_cancelamento`) VALUES
	(1, 7, 2, '2025-05-02 15:04:21', NULL),
	(2, 8, 1, '2025-06-29 18:42:49', NULL),
	(3, 9, 7, '2025-06-29 19:40:58', NULL),
	(4, 9, 5, '2025-06-29 19:41:12', NULL),
	(5, 9, 3, '2025-06-29 19:41:21', '2025-06-29 19:41:25'),
	(6, 4, 2, '2025-06-29 19:47:40', NULL),
	(7, 4, 5, '2025-06-29 19:47:43', NULL),
	(8, 4, 4, '2025-06-29 19:47:45', NULL),
	(9, 4, 7, '2025-06-29 19:47:46', '2025-06-29 19:48:00');

-- Dumping structure for table azcursos.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `senha` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `nascimento` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table azcursos.usuarios: ~9 rows (approximately)
INSERT INTO `usuarios` (`id`, `nome`, `email`, `senha`, `nascimento`) VALUES
	(1, 'Paulo Souza', 'paulo@email.com', '$2b$10$h2VWX8VtLetDFXkxiH1zm.aSFeZ6u5/vSTEyXeEXeybuidmnAaSyS', '1987-08-27'),
	(2, 'Poliana Frogeri', 'poliana@email.com', '$2b$10$PDUxYs2aMtBtAvI5t16X2OqpALQiOuV8aRPly6ewqP0/LiQunnRgu', '1989-05-12'),
	(3, 'Martin Santos', 'martin@email.com', '$2b$10$H0hiKelapv/f5SSs0XxRgOgmTwTjKhMAQdORjXqUfEHlmW3p4jSmu', '1974-04-02'),
	(4, 'Samuel Bernardes', 'samuel@email.com', '$2b$10$SAbZMx/kC7H18r4wzqRfLOU5h1IzjzEIvXAeU4RwTvDzgv2k0oBe6', '2000-07-18'),
	(5, 'Yago Silva', 'yago@email.com', '$2b$10$hX2XGW3Oi.syXhu68QuHMeDirnYZgs4iutK9rH44.ixSVn4b4Gwx2', '1988-10-18'),
	(6, 'Karen Figueiredo', 'karen@email.com', '$2b$10$b9VFYN3PG15cICTt88xPZOq7vZRCh8Ab6yeaBaoddgskHthUGRNSS', '2002-03-14'),
	(7, 'Lucas Silva', 'lucas@email.com', '$2b$10$HJt86BRn7LVWmq.SGX7mTOSZxXc8deQkk4vLn6APSWWFg6l5XwV1y', '1995-03-11'),
	(8, 'Luiza Carvalho', 'luiza@email.com', '$2b$10$D5dNj9Pf6I9Ukk2gjRbG5.kYeZRa60MaQa3xJUc1Jhd8aQRzYgTtO', '1990-11-22'),
	(9, 'Matheus Henrique Brito', 'matheus@email.com', '$2b$10$mznnqLpZU2916JCxen53AODJOtb1Iz9f5/yLuy8CN.jZEIHs58ai.', '1992-01-19');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
