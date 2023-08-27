import { ColorRing } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ColorRing
        visible={true}
        type="Bars"
        color="#3f51b5"
        height={50}
        width={50}
    />
  );
};