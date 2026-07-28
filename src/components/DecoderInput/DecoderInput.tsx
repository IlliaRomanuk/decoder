import './DecoderInput.css';
import { useState } from 'react';

type DecoderInputProps = {
  onDecode: (vin: string) => void;
  isLoading: boolean;
};

function DecoderInput({onDecode, isLoading }: DecoderInputProps) {
  const [vin, setVin] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateVin = (vin: string) => {
    const normalizedVin = vin.trim().toUpperCase();

    if (!normalizedVin) return 'VIN не може бути порожнім';
    if (normalizedVin.length !== 17) return 'VIN має містити рівно 17 символів';

    const vinRegex = /^[A-HJ-NPR-Z0-9]+$/;
    if (!vinRegex.test(normalizedVin)) return 'VIN містить заборонені символи';

    return '';
  };

  const handleDecode = async () => {
    if (isLoading) return; // страховка от двойного клика/Enter

    const normalizedVin = vin.trim().toUpperCase();
    const validationError = validateVin(normalizedVin);

    if (validationError) {
      setError(validationError);
      return;
    }

    setError('');
    setIsSubmitting(true);

    try {
      await onDecode(normalizedVin); // и всё, больше ничего
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Помилка запиту');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="decoder-box">
      <h2>Decode VIN</h2>

      <input
        className="decoder-input"
        value={vin}
        onChange={(e) => setVin(e.target.value.toUpperCase())}
        maxLength={17}
        placeholder="Enter VIN"
      />

      <button
        onClick={handleDecode}
        className="decoderButton"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Loading...' : 'Decode'}
      </button>

      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default DecoderInput;
