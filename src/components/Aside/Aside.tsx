import DecoderInput from '../DecoderInput/DecoderInput';
import DecoderHistory from '../DecoderHistory/DecoderHistory';

import './Aside.css';
type AsideProps = {
  history: string[];
  setHistory: React.Dispatch<React.SetStateAction<string[]>>;
  isLoading: boolean;
  onDecode: (vin: string) => Promise<void>;
};

function Aside({ history, isLoading, onDecode }: AsideProps) {
  return (
    <>
      <DecoderInput
        onDecode={onDecode}
        isLoading={isLoading}
      />
      <DecoderHistory
        history={history}
        onDecode={isLoading ? () => {} : onDecode}
      />
    </>
  );
}

export default Aside;
