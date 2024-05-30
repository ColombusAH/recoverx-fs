import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';

function PlayerPage() {
  return (
    <>
      <Meta title="Player" />
      <FullSizeCenteredFlexBox>
        <Typography variant="h3">Player Page</Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default PlayerPage;
