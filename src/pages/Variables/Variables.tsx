import { getVehiclevariablelist } from '../../services/api';
import { Link } from 'react-router-dom';
import './Variables.css';
import { useQuery } from '@tanstack/react-query';
import type { Variable } from '../../type/variable.type';

type VehicleVariableResponse = {
  Results: Variable[];
};

function Variables() {
  const { data, isLoading, error } = useQuery<VehicleVariableResponse>({
    queryKey: ['variables'],
    queryFn: getVehiclevariablelist,
  });

  if (isLoading) return <p>Loading variables</p>;
  if (error) return <p>Error variables</p>;

  return (
    <div className="variables-page">
      <div className="variables-box">
        <h2>Vehicle Variables</h2>
        <ul className="variables-list">
          {data?.Results.map((variable: Variable) => (
            <li key={variable.ID} className="variable-item">
              <Link
                to={`/variables/${variable.ID}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div>
                  <h3>{variable.Name}</h3>
                  <p>ID: {variable.ID}</p>
                </div>
                <div
                  className="details-description"
                  dangerouslySetInnerHTML={{ __html: variable.Description }}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Variables;
