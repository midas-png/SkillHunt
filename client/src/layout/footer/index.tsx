import {
  FooterWrapper,
  EmailSocialsWrapper,
  FormWrapper,
  TextfieldWrapper,
  MediaLinksWrapper,
  MediaLinkItem,
  NavigationWrapper,
  NavigationColumnWrapper,
  NavigationItemWrapper,
  NavigationItem,
} from './styles';
import { NAVIGATIONS, MEDIA } from './data';
import { useAppSelector } from 'features';
import { Button, Title, Textfield } from 'ui';

export const Footer = () => {
  const { isAuth } = useAppSelector((state) => state.userReducer);

  return (
    <FooterWrapper>
      <EmailSocialsWrapper>
        <Title variant='h2' letterSpacing={3} light>
          SkillHunt
        </Title>
        {isAuth === false && (
          <FormWrapper>
            <TextfieldWrapper>
              <Textfield variant='secondary' />
            </TextfieldWrapper>
            <Button variant='quaternary' size='medium'>
              Join
            </Button>
          </FormWrapper>
        )}
        <MediaLinksWrapper>
          {MEDIA.map(({ Icon }) => (
            <MediaLinkItem key={Math.random()}>
              <Icon />
            </MediaLinkItem>
          ))}
        </MediaLinksWrapper>
      </EmailSocialsWrapper>
      <NavigationWrapper>
        {NAVIGATIONS.map((navitaion) => (
          <NavigationColumnWrapper key={navitaion.title}>
            <Title variant='h4' light>
              {navitaion.title}
            </Title>
            <NavigationItemWrapper>
              {navitaion.links.map((link) => (
                <NavigationItem key={link.label} to={link.linkTo}>
                  {link.label}
                </NavigationItem>
              ))}
            </NavigationItemWrapper>
          </NavigationColumnWrapper>
        ))}
      </NavigationWrapper>
    </FooterWrapper>
  );
};
