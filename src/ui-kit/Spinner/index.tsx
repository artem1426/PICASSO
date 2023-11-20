import { style } from '../../utils/styles';

const Spinner = () => (
  <div
    className={style(
      'w-6 h-6 rounded-full bg-transparent border-primary',
      'border-2 border-t-transparent animate-spin'
    )}
  />
);
export default Spinner;
