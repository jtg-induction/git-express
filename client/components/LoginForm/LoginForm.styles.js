import { styled, Box } from '@mui/material';

export const Root = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(4, 2),
  [theme.breakpoints.up('md')]: {
    maxWidth: theme.typography.pxToRem(320),
  },
}));
