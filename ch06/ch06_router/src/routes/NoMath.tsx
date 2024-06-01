import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../theme/daisyui';
export default function NoMatch() {
  const navigate = useNavigate();

  const goBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);
  return (
    <div className="flex flex-col p-4">
      <p className="p-4 text-xl text-center alert alert-error">
        Opps! No page found!
      </p>
      <div className="flex justify-center mt-4">
        <Button className="ml-4 btn-primary btn-xs" onClick={goBack}>
          Go Back
        </Button>
      </div>
    </div>
  );
}
