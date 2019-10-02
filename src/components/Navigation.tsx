import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeOutlined, BugReportOutlined } from '@material-ui/icons';
import { motion } from 'framer-motion';

export function Navigation(): JSX.Element {
  return (
    <motion.nav
      initial={{ x: '-100%' }}
      animate={{ x: '0' }}
      transition={{ duration: 0.25 }}
    >
      <NavLink exact to="/">
        <HomeOutlined className="icon" />
        Home
      </NavLink>
      <NavLink exact to="/debug">
        <BugReportOutlined className="icon" />
        Debug
      </NavLink>
    </motion.nav>
  );
}
