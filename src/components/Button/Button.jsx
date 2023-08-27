import PropTypes from 'prop-types';
import { WrapButton, ButtonMore } from './Button.styled';

export default function Button ({ onclick }) {
  return (
    <WrapButton>
      <ButtonMore type="button" onClick={onclick}>
        Load more
      </ButtonMore>
    </WrapButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};