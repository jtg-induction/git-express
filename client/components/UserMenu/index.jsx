import * as React from 'react';
import { useState } from 'react';
import { Button, Avatar, Menu, MenuItem } from '@mui/material';

const UserMenu = ({ items = [], avatarSrc = '' }) => {
  const [menuAnchor, setMenuAnchor] = useState(null);

  return (
    <React.Fragment>
      <Button
        aria-controls={menuAnchor ? 'user-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={menuAnchor ? 'true' : undefined}
        onClick={(event) => setMenuAnchor(event.currentTarget)}
        sx={{ p: 0, minWidth: 'unset' }}
      >
        <Avatar src={avatarSrc} alt="avatar" />
      </Button>
      <Menu
        id="user-menu"
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={() => setMenuAnchor(null)}
        MenuListProps={{
          'aria-labelledby': `user-menuButton`,
        }}
      >
        {items.map((item) => (
          <MenuItem
            key={item.value}
            onClick={(e) => {
              setMenuAnchor(null);
              item.onClick && item.onClick(e, item.value);
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
};

export default UserMenu;
