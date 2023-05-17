import { Container, Stack, TextField, Box, Button, Typography, Alert } from '@mui/material';
import React, { useContext, useState } from 'react';
import { userData } from '../fakeData';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { setIsUser } = useContext(UserContext);

  const auth = () => {
    if (username === userData.username && password === userData.password) {
      navigate('/profile');
      setIsUser(true);
    } else {
      alert('Имя пользователя или пароль введены не верно');
      setPassword('');
      setUsername('');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box component={'form'}>
        <Typography>Login</Typography>
        <Stack spacing={2}>
          <TextField
            id="username"
            label="Username"
            variant="standard"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id="password"
            label="Password"
            variant="standard"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" onClick={auth}>
            Login
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default Login;
