import './DecoderHistory.css';
import arrow from '../../assets/free-icon-right-arrow-angle-54833.png';

type historyProps = {
  history: string[];
  onDecode: (vin: string) => void;
};

function DecoderHistory({ history, onDecode }: historyProps) {
  return (
    <div className="history-box">
      <h2>Recent history</h2>

      <ul className="decoderList">
        {history.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className="listPunkt"
            onClick={() => onDecode(item)}
          >
            {item}
            <img alt="arrow" className="listImg" src={arrow} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DecoderHistory;
