import { TextField, Button, CircularProgress, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Root } from './LoginForm.styles';

const validationSchema = yup.object().shape({
  username: yup.string().required('This field is required.'),
  password: yup.string().required('This field is required.'),
});

export const LoginForm = ({ isLoading, onSubmit }) => {
  const {
    handleSubmit,
    register,
    formState: {
      errors: {
        username: { message: usernameError } = {},
        password: { message: passwordError } = {},
      } = {},
    } = {},
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  return (
    <Root
      component="form"
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
      })}
    >
      <TextField
        {...register('username')}
        label="Username"
        variant="outlined"
        error={Boolean(usernameError)}
        helperText={usernameError}
        fullWidth
      />
      <TextField
        {...register('password')}
        label="Password"
        type="password"
        variant="outlined"
        error={Boolean(passwordError)}
        helperText={passwordError}
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        sx={{ alignSelf: 'flex-end' }}
        {...(isLoading && {
          style: {
            pointerEvents: 'none',
          },
          tabIndex: -1,
        })}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: 0,
            height: 0,
            overflow: 'hidden',
            transition: 'width 0.3s',
            ...(isLoading && {
              width: '30px',
              height: '100%',
            }),
          }}
        >
          <CircularProgress thickness={5} size={18} color="inherit" />
        </Box>
        Login
      </Button>
    </Root>
  );
};
