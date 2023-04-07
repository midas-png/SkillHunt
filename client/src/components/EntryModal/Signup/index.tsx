import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TypeOf } from 'zod';
import {
  SignupModalWrapper,
  LinkWrapper,
  ModalLink,
  ModalLinkContent,
  FormWrapper,
  ModalTermsWrapper,
  ModalTerms,
  ModalTermsLink,
} from './styles';
import { signupSchema } from './schema';
import { useAppDispatch } from 'features';
import { modalSlice } from 'store';
import { Button, Title, Textfield } from 'ui';

type FormValues = TypeOf<typeof signupSchema>;

export const SignupModal = () => {
  const { setType } = modalSlice.actions;
  const dispatch = useAppDispatch();
  const {
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(signupSchema),
  });

  const signup: SubmitHandler<FormValues> = (data): void => {
    console.log(data.email, data.password);
  };

  return (
    <SignupModalWrapper>
      <Title fontSize={30}>Sign Up</Title>
      <FormWrapper>
        <Textfield
          placeholder='Email'
          error={errors.email?.message}
          onChange={(e) => setValue('email', e.target.value)}
        />
        <Textfield
          placeholder='Password'
          type='password'
          error={errors.password?.message}
          onChange={(e) => setValue('password', e.target.value)}
        />
      </FormWrapper>
      <Button
        size='full'
        variant='quinary'
        disableShadow
        onClick={handleSubmit(signup)}>
        Create account
      </Button>
      <ModalTermsWrapper>
        <ModalTerms>By clicking "Create account" you agree to the </ModalTerms>
        <ModalTermsLink>Privacy Policy</ModalTermsLink>
      </ModalTermsWrapper>
      <LinkWrapper>
        <ModalLinkContent>Already have account?</ModalLinkContent>
        <ModalLink onClick={() => dispatch(setType('SIGNIN'))}>
          Sign In
        </ModalLink>
      </LinkWrapper>
    </SignupModalWrapper>
  );
};
