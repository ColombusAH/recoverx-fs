import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';
import { useIntl } from 'react-intl';
import { useQuery } from 'react-query';
import { fetchUsers } from '@/api/page1';
import { AccountManager, User } from '../../shared';
import { remult } from 'remult';
import { useState, useCallback, useEffect } from 'react';
const amRepo = remult.repo(AccountManager);
const userRepo = remult.repo(User);
function Page1() {
  const intl = useIntl();
  const [accountManagers, setAccountManagers] = useState<AccountManager[]>([])
  const [users, setUsers] = useState<User[]>([])
  // const { data, isLoading, isError } = useQuery('users', fetchUsers);
  const loadAll = useCallback(
    () => {
      // amRepo.find().then(setAccountManagers);
      userRepo.find().then(setUsers);

    },
    []
  )

  useEffect(() => {
    loadAll();
    
  }, [ ])
  const apiUrl = import.meta.env.VITE_API_URL;
  console.log('apiUrl', apiUrl);
  // console.log('useQuery', data, isLoading, isError);
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
