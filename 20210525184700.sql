/*
MySQL Backup
Database: blog
Backup Time: 2021-05-25 18:47:00
*/

SET FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS `blog`.`article`;
DROP TABLE IF EXISTS `blog`.`settings`;
CREATE TABLE `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `h1` varchar(255) DEFAULT NULL,
  `data` varchar(255) DEFAULT NULL,
  `time` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `updata` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
CREATE TABLE `settings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `puTonFile` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `github` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `adminName` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `NO` int(11) NOT NULL DEFAULT 0,
  `background` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `portrait` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
BEGIN;
LOCK TABLES `blog`.`article` WRITE;
DELETE FROM `blog`.`article`;
INSERT INTO `blog`.`article` (`id`,`h1`,`data`,`time`,`updata`) VALUES (1, '测试', '看来是没有问题', '2021-05-25 18:22:12', '2021-05-25 18:22:12'),(2, 'dwa', 'aw', NULL, NULL),(3, 'awd', 'awdawd', NULL, NULL),(4, '写在前言', '其实也没什么好说的，大家懂得都懂', '2021-05-25 18:22:40', '2021-05-25 18:22:40');
UNLOCK TABLES;
COMMIT;
BEGIN;
LOCK TABLES `blog`.`settings` WRITE;
DELETE FROM `blog`.`settings`;
INSERT INTO `blog`.`settings` (`id`,`puTonFile`,`name`,`github`,`title`,`adminName`,`password`,`NO`,`background`,`logo`,`portrait`) VALUES (1, '备案', '高旭生', 'https://gitee.com/ToSimplZ/blog', '网站标题', 'admin账户名称', '密码', 0, '', '', '');
UNLOCK TABLES;
COMMIT;
