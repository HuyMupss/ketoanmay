-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 05, 2023 at 05:01 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blog`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog_categories`
--

CREATE TABLE `blog_categories` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(100) NOT NULL,
  `category_description` varchar(100) NOT NULL,
  `category_date_created` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `blog_categories`
--

INSERT INTO `blog_categories` (`category_id`, `category_name`, `category_description`, `category_date_created`) VALUES
(1, 'Design', 'Phân loại các phương pháp thiết kế', '2023-03-29 15:44:34'),
(2, 'Development', 'Phân loại các ngôn ngữ lập trình', '2023-03-29 16:47:21');

-- --------------------------------------------------------

--
-- Table structure for table `blog_comment`
--

CREATE TABLE `blog_comment` (
  `n_blog_comment_id` int(11) NOT NULL,
  `n_blog_comment_parent_id` int(11) NOT NULL,
  `n_blog_post_id` int(11) NOT NULL,
  `v_comment_author` varchar(50) NOT NULL,
  `v_comment_author_email` varchar(100) NOT NULL,
  `v_comment` varchar(500) NOT NULL,
  `d_date_created` date NOT NULL,
  `d_time_created` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `blog_contact`
--

CREATE TABLE `blog_contact` (
  `n_contact_id` int(11) NOT NULL,
  `v_fullname` varchar(50) NOT NULL,
  `v_email` varchar(50) NOT NULL,
  `v_phone` varchar(50) NOT NULL,
  `v_message` text NOT NULL,
  `d_date_created` date NOT NULL,
  `d_time_created` date NOT NULL,
  `f_contact_status` int(1) NOT NULL COMMENT '1-Inactive|2-Active|3-Deleted'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `blog_post`
--

CREATE TABLE `blog_post` (
  `blog_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `blog_name` varchar(100) NOT NULL,
  `blog_summary` text NOT NULL,
  `blog_content` text NOT NULL,
  `blog_main_image` varchar(100) NOT NULL,
  `blog_alt_image` varchar(100) NOT NULL,
  `blog_place` int(1) NOT NULL COMMENT '0-Inactive|1-Active|2-Deleted',
  `blog_status` int(1) NOT NULL COMMENT '0-Inactive|1-Active|2-Deleted',
  `blog_date_created` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `blog_subscriber`
--

CREATE TABLE `blog_subscriber` (
  `n_sub_id` int(11) NOT NULL,
  `v_sub_email` varchar(50) NOT NULL,
  `d_date_created` date NOT NULL,
  `d_time_created` date NOT NULL,
  `f_sub_status` int(1) NOT NULL COMMENT '1-Inactive|2-Active|3-Deleted'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `blog_tags`
--

CREATE TABLE `blog_tags` (
  `n_tag_id` int(11) NOT NULL,
  `n_blog_post_id` int(11) NOT NULL,
  `v_tag` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `blog_user`
--

CREATE TABLE `blog_user` (
  `n_user_id` int(11) NOT NULL,
  `v_username` varchar(50) NOT NULL,
  `v_password` varchar(100) NOT NULL,
  `v_fullname` varchar(100) NOT NULL,
  `v_phone` varchar(50) NOT NULL,
  `v_email` varchar(100) NOT NULL,
  `v_image` varchar(100) NOT NULL,
  `v_message` varchar(500) NOT NULL,
  `d_date_updated` date NOT NULL,
  `d_time_updated` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog_categories`
--
ALTER TABLE `blog_categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `blog_comment`
--
ALTER TABLE `blog_comment`
  ADD PRIMARY KEY (`n_blog_comment_id`);

--
-- Indexes for table `blog_contact`
--
ALTER TABLE `blog_contact`
  ADD PRIMARY KEY (`n_contact_id`);

--
-- Indexes for table `blog_post`
--
ALTER TABLE `blog_post`
  ADD PRIMARY KEY (`blog_id`);

--
-- Indexes for table `blog_subscriber`
--
ALTER TABLE `blog_subscriber`
  ADD PRIMARY KEY (`n_sub_id`);

--
-- Indexes for table `blog_tags`
--
ALTER TABLE `blog_tags`
  ADD PRIMARY KEY (`n_tag_id`);

--
-- Indexes for table `blog_user`
--
ALTER TABLE `blog_user`
  ADD PRIMARY KEY (`n_user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blog_categories`
--
ALTER TABLE `blog_categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `blog_comment`
--
ALTER TABLE `blog_comment`
  MODIFY `n_blog_comment_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `blog_contact`
--
ALTER TABLE `blog_contact`
  MODIFY `n_contact_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `blog_post`
--
ALTER TABLE `blog_post`
  MODIFY `blog_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `blog_subscriber`
--
ALTER TABLE `blog_subscriber`
  MODIFY `n_sub_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `blog_tags`
--
ALTER TABLE `blog_tags`
  MODIFY `n_tag_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `blog_user`
--
ALTER TABLE `blog_user`
  MODIFY `n_user_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
