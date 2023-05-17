import React, { useState } from 'react';
import { Avatar, Box, Button, Stack, TextField } from '@mui/material';
import cat from '../assets/cat.jpg';

const Profile = () => {
  const [userName, setUsername] = useState('User');
  const [password, setPassword] = useState('');

  const changeData = () => {
    setUsername('');
    setPassword('');
  };

  return (
    <Box>
      <Stack direction={'row'} spacing={8} alignItems={'center'} justifyContent={'center'}>
        <Avatar alt="cat" src={cat} sx={{ width: 156, height: 156 }} />
        <Box component={'form'}>
          <Stack spacing={2}>
            <TextField
              label={'username'}
              value={userName}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <TextField
              type={'password'}
              label={'password'}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button onClick={changeData}>Change</Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Profile;
