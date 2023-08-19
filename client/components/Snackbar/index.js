import React from 'react';
import { Snackbar as MuiSnackbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { REDUX_ACTIONS } from '@reduxActions';

const Snackbar = () => {
  const snackbarConfig = useSelector((state) => state.snackbar);
  const dispatch = useDispatch();

  return (
    <MuiSnackbar
      autoHideDuration={5000}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      onClose={() => {
        dispatch({
          type: REDUX_ACTIONS.CLOSE_SNACKBAR,
        });
      }}
      {...snackbarConfig}
    />
  );
};

export default Snackbar;
