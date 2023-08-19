import SVG from 'react-inlinesvg';
import LoadingSvg from '@images/loading_full.svg';
import { Box } from '@mui/material';

const Loader = () => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor={(theme) => theme.palette.common.white}
      zIndex={100}
    >
      <Box width={70} height={70}>
        <SVG src={LoadingSvg} />
      </Box>
    </Box>
  );
};

export default Loader;
