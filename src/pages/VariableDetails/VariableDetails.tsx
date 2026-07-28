import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getVehiclevariablelist } from '../../services/api';
import './VariableDetails.css';

function VariableDetails() {
  const { id } = useParams();

  const {
    data: variable,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['variables'],
    queryFn: getVehiclevariablelist,
    select: (data) => data.Results.find((v) => v.ID === Number(id)) ?? null,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading variable</p>;
  if (!variable) return <p>Variable not found</p>;

  return (
    <div className="details-page">
      <div className="details-box">
        <div className="details-header">
          <h2>{variable.Name}</h2>
          <span className="details-id">ID: {variable.ID}</span>
        </div>
        <div
          className="details-description"
          dangerouslySetInnerHTML={{ __html: variable.Description }}
        />
      </div>
    </div>
  );
}

export default VariableDetails;
