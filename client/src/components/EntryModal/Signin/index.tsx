import { useForm, SubmitHandler } from 'react-hook-form';
import {
  SigninModalWrapper,
  SectionWrapper,
  ModalLink,
  ModalLinkContent,
  ModalLinkWrapper,
  FormWrapper,
} from './styles';
import { useAppDispatch } from 'features';
import { modalSlice } from 'store';
import { Button, Title, Textfield } from 'ui';

type FormValues = {
  email: string;
  password: string;
};

export const SigninModal = () => {
  const { setType } = modalSlice.actions;
  const dispatch = useAppDispatch();
  const { setValue, handleSubmit } = useForm<FormValues>();

  const signin: SubmitHandler<FormValues> = (data): void => {
    console.log(data.email, data.password);
  };

  return (
    <SigninModalWrapper>
      <Title fontSize={30}>Sign In</Title>
      <FormWrapper>
        <Textfield
          placeholder='Email'
          onChange={(e) => setValue('email', e.target.value)}
        />
        <Textfield
          placeholder='Password'
          type='password'
          onChange={(e) => setValue('password', e.target.value)}
        />
      </FormWrapper>
      <Button
        size='full'
        variant='quinary'
        disableShadow
        onClick={handleSubmit(signin)}>
        Sign In
      </Button>
      <SectionWrapper>
        <ModalLink>Reset Password</ModalLink>
        <ModalLinkWrapper>
          <ModalLinkContent>No account?</ModalLinkContent>
          <ModalLink onClick={() => dispatch(setType('SIGNUP'))}>
            Sign Up
          </ModalLink>
        </ModalLinkWrapper>
      </SectionWrapper>
    </SigninModalWrapper>
  );
};
