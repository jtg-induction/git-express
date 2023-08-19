import { Fragment } from 'react';
import { Box } from '@mui/material';

export const TwoColumnLayout = (props) => {
  const { leftContent, rightContent, header } = props;

  return (
    <Fragment>
      {header}
      <Box
        display="flex"
        sx={(theme) => ({
          [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
          },
        })}
      >
        <Box flexBasis="50%">
          <Fragment>{leftContent}</Fragment>
        </Box>
        <Box flexBasis="50%">
          <Fragment>{rightContent}</Fragment>
        </Box>
      </Box>
    </Fragment>
  );
};
