import { Avatar, Box, Typography } from '@mui/material';

const SearchOptionTemplate = ({ imgSrc, text, subText }) => (
  <Box display="flex" gap={1} alignItems="center">
    <Avatar
      src={imgSrc}
      sx={(theme) => ({
        width: 36,
        height: 36,
        border: `2px solid ${theme.palette.text.disabled}`,
      })}
    />
    <Box display="flex" flexDirection="column" justifyContent="center">
      <Typography sx={{ lineHeight: 1 }}>{text}</Typography>
      {subText && (
        <Typography variant="caption" color="textSecondary">
          {subText}
        </Typography>
      )}
    </Box>
  </Box>
);

export default SearchOptionTemplate;
