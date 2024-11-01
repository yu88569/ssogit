// src/pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/auth/authSlice';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // นำเข้า useNavigate

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // ใช้ useNavigate
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/login', formData);

      if (response.data.token) {
        dispatch(loginUser(response.data.token));
        setStatus('');
        navigate('/Register'); // เปลี่ยนเส้นทางไปที่หน้า index
      }
    } catch (err) {
      setError('Invalid email or password');
      setStatus('');
    }
  };

  return (
    <Container maxWidth="xs">
      <Box mt={8}>
        <Typography variant="h4" align="center">Login</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            {status === 'loading' ? 'Logging in...' : 'Login'}
          </Button>
          {error && <Typography color="error">{error}</Typography>}
        </form>
      </Box>
    </Container>
  );
};

export default Login;
