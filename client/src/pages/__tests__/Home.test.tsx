import { screen } from '@testing-library/react';
import { renderWithTheme } from 'features';
import { Home } from 'pages/Home';

test('Home page render', () => {
  renderWithTheme(<Home />);
  const title1 = screen.getByText(/^Land a job$/i);
  const title2 = screen.getByText(/^the easy way$/i);
  const subtitle = screen.getByText(
    /The best place to discover & apply to the coolest start up jobs, without the black box./i
  );
  const button = screen.getByText(/^explore$/i);

  expect(title1).toBeInTheDocument;
  expect(title2).toBeInTheDocument;
  expect(subtitle).toBeInTheDocument;
  expect(button).toBeInTheDocument;
});
