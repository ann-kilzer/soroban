import styled from '@emotion/styled';
import Box from '@mui/material/Box';

const Bead = styled(Box)({
  width: '150px',
  height: '100px',
  background: 'linear-gradient(cyan, blue)',
  position: 'relative',
  clipPath: 'polygon(50% 0%, 100% 42%, 100% 58%, 50% 100%, 0% 58%, 0% 42%)'
  
})

export default Bead;