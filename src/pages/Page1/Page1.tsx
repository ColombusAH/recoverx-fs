import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';
import { useIntl } from 'react-intl';
import { useQuery } from 'react-query';
import { fetchUsers } from '@/api/page1';
function Page1() {
  const intl = useIntl();
  const { data, isLoading, isError } = useQuery('users', fetchUsers);
  const apiUrl = import.meta.env.VITE_API_URL;
  console.log('apiUrl', apiUrl);
  console.log('useQuery', data, isLoading, isError);
  return (
    <>
      <Meta title="page 1" />
      <FullSizeCenteredFlexBox>
        <Typography variant="h3">{intl.formatMessage({ id: 'greeting' })}</Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Page1;
