import { ColorRing } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ColorRing
      visible={true}
      height="100"
      width="100"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#20cfe0', '#2190e3', '#1d9de5', '#173bc0', '#173bc0']}
    />
  );
};