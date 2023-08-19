import { Box, Skeleton } from '@mui/material';

export const DetailCardSkeleton = () => {
  return (
    <Box
      sx={(theme) => ({
        padding: theme.typography.pxToRem(20),
        width: '100%',
        maxWidth: theme.typography.pxToRem(400),
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: '8px',
        gap: '16px',
        border: `1px solid ${theme.palette.divider}`,
      })}
    >
      <Skeleton variant="circular" animation="wave" width={96} height={96} />
      <Skeleton
        variant="rectangular"
        sx={{ borderRadius: '6px' }}
        height={24}
        animation="wave"
        width={100}
      />
      <Skeleton width="100%" variant="text" />
      <Box display="flex" width="100%" justifyContent="space-between">
        <Skeleton
          variant="rectangular"
          sx={{ borderRadius: '6px' }}
          height={24}
          animation="wave"
          width={100}
        />
        <Skeleton
          variant="rectangular"
          sx={{ borderRadius: '6px' }}
          height={24}
          animation="wave"
          width={100}
        />
      </Box>
      <Box display="flex" width="100%" gap={1}>
        <Skeleton
          variant="rectangular"
          sx={{ borderRadius: '6px' }}
          height={24}
          animation="wave"
          width={100}
        />
        <Skeleton
          variant="rectangular"
          sx={{ borderRadius: '6px' }}
          height={24}
          animation="wave"
          width={100}
        />
      </Box>
      <Box width="100%" display="flex" flexDirection="column" gap={0.5}>
        <Skeleton width="100%" variant="text" />
        <Skeleton width="100%" variant="text" />
      </Box>
    </Box>
  );
};
