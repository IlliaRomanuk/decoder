import './Results.css';
import type { Result } from '../../type/result.type';

type Props = {
  data: Result[];
  message: string;
  error: Error | null;
};

function Results({ data, message, error }: Props) {
  return (
    <div className="results-box">
      <h2>Results</h2>

      {message && <p className="api-message">{message}</p>}

      {error && <p className="api-error">{error.message}</p>}

      <table className="results-table">
        <thead>
          <tr>
            <th>Variable</th>
            <th>Value</th>
          </tr>
        </thead>

        <tbody>
          {data
            .filter((item) => item.Value !== '' && item.Value !== null)
            .map((item) => (
              <tr key={item.VariableId}>
                <td>{item.Variable}</td>
                <td>{item.Value}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Results;
