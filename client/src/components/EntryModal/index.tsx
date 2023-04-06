import { SigninModal } from './Signin';
import { SignupModal } from './Signup';
import { useAppSelector } from 'features';

export const EntryModal = () => {
  const { type } = useAppSelector((state) => state.modalReducer);

  if (type === 'SIGNIN') return <SigninModal />;
  return <SignupModal />;
};
