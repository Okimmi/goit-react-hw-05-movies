import { Triangle } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Triangle
      height="80"
      width="80"
      color="#233e88"
      ariaLabel="triangle-loading"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
      }}
      wrapperClassName=""
      visible={true}
    />
  );
};
