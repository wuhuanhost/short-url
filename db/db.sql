/*
Navicat MySQL Data Transfer

Source Server         : MYSQL57
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : abc

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2017-09-29 12:36:53
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `short_url_0`
-- ----------------------------
DROP TABLE IF EXISTS `short_url_0`;
CREATE TABLE `short_url_0` (
  `code` varchar(20) NOT NULL DEFAULT '' COMMENT 'url对应的编码',
  `url` varchar(255) NOT NULL COMMENT 'key对应的真实url链接',
  PRIMARY KEY (`code`),
  KEY `code_index` (`code`) USING HASH
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of short_url_0
-- ----------------------------

-- ----------------------------
-- Table structure for `short_url_1`
-- ----------------------------
DROP TABLE IF EXISTS `short_url_1`;
CREATE TABLE `short_url_1` (
  `code` varchar(20) NOT NULL DEFAULT '' COMMENT 'url对应的编码',
  `url` varchar(255) NOT NULL COMMENT 'key对应的真实url链接',
  PRIMARY KEY (`code`),
  KEY `code_index` (`code`) USING HASH
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of short_url_1
-- ----------------------------
INSERT INTO `short_url_1` VALUES ('1', 'https://www.baidu.com/');

-- ----------------------------
-- Table structure for `short_url_2`
-- ----------------------------
DROP TABLE IF EXISTS `short_url_2`;
CREATE TABLE `short_url_2` (
  `code` varchar(20) NOT NULL DEFAULT '' COMMENT 'url对应的编码',
  `url` varchar(255) NOT NULL COMMENT 'key对应的真实url链接',
  PRIMARY KEY (`code`),
  KEY `code_index` (`code`) USING HASH
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of short_url_2
-- ----------------------------
INSERT INTO `short_url_2` VALUES ('2', 'https://www.baidu.com/s?ie=UTF-8&wd=%E6%96%B0%E6%B5%AA');

-- ----------------------------
-- Table structure for `short_url_3`
-- ----------------------------
DROP TABLE IF EXISTS `short_url_3`;
CREATE TABLE `short_url_3` (
  `code` varchar(20) NOT NULL DEFAULT '' COMMENT 'url对应的编码',
  `url` varchar(255) NOT NULL COMMENT 'key对应的真实url链接',
  PRIMARY KEY (`code`),
  KEY `code_index` (`code`) USING HASH
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of short_url_3
-- ----------------------------

-- ----------------------------
-- Table structure for `short_url_4`
-- ----------------------------
DROP TABLE IF EXISTS `short_url_4`;
CREATE TABLE `short_url_4` (
  `code` varchar(20) NOT NULL DEFAULT '' COMMENT 'url对应的编码',
  `url` varchar(255) NOT NULL COMMENT 'key对应的真实url链接',
  PRIMARY KEY (`code`),
  KEY `code_index` (`code`) USING HASH
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of short_url_4
-- ----------------------------

-- ----------------------------
-- Table structure for `short_url_5`
-- ----------------------------
DROP TABLE IF EXISTS `short_url_5`;
CREATE TABLE `short_url_5` (
  `code` varchar(20) NOT NULL DEFAULT '' COMMENT 'url对应的编码',
  `url` varchar(255) NOT NULL COMMENT 'key对应的真实url链接',
  PRIMARY KEY (`code`),
  KEY `code_index` (`code`) USING HASH
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of short_url_5
-- ----------------------------

-- ----------------------------
-- Table structure for `short_url_6`
-- ----------------------------
DROP TABLE IF EXISTS `short_url_6`;
CREATE TABLE `short_url_6` (
  `code` varchar(20) NOT NULL DEFAULT '' COMMENT 'url对应的编码',
  `url` varchar(255) NOT NULL COMMENT 'key对应的真实url链接',
  PRIMARY KEY (`code`),
  KEY `code_index` (`code`) USING HASH
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of short_url_6
-- ----------------------------

-- ----------------------------
-- Table structure for `short_url_7`
-- ----------------------------
DROP TABLE IF EXISTS `short_url_7`;
CREATE TABLE `short_url_7` (
  `code` varchar(20) NOT NULL DEFAULT '' COMMENT 'url对应的编码',
  `url` varchar(255) NOT NULL COMMENT 'key对应的真实url链接',
  PRIMARY KEY (`code`),
  KEY `code_index` (`code`) USING HASH
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of short_url_7
-- ----------------------------

-- ----------------------------
-- Table structure for `short_url_8`
-- ----------------------------
DROP TABLE IF EXISTS `short_url_8`;
CREATE TABLE `short_url_8` (
  `code` varchar(20) NOT NULL DEFAULT '' COMMENT 'url对应的编码',
  `url` varchar(255) NOT NULL COMMENT 'key对应的真实url链接',
  PRIMARY KEY (`code`),
  KEY `code_index` (`code`) USING HASH
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of short_url_8
-- ----------------------------

-- ----------------------------
-- Table structure for `short_url_9`
-- ----------------------------
DROP TABLE IF EXISTS `short_url_9`;
CREATE TABLE `short_url_9` (
  `code` varchar(20) NOT NULL DEFAULT '' COMMENT 'url对应的编码',
  `url` varchar(255) NOT NULL COMMENT 'key对应的真实url链接',
  PRIMARY KEY (`code`),
  KEY `code_index` (`code`) USING HASH
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of short_url_9
-- ----------------------------

-- ----------------------------
-- Table structure for `sys_config`
-- ----------------------------
DROP TABLE IF EXISTS `sys_config`;
CREATE TABLE `sys_config` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `keyword` varchar(20) NOT NULL DEFAULT '' COMMENT 'url对应的编码',
  `value` varchar(255) NOT NULL COMMENT 'key对应的真实url链接',
  `remark` varchar(255) NOT NULL COMMENT '备注',
  PRIMARY KEY (`id`),
  UNIQUE KEY `key_index` (`keyword`) USING HASH
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of sys_config
-- ----------------------------
INSERT INTO `sys_config` VALUES ('1', 'max_index', '2', 'short_url中现有id的最大值');
INSERT INTO `sys_config` VALUES ('2', 'domain', 'http://localhost:8080', '短连接域名');
