import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const BackButton = () => {
  const router = useRouter();

  return (
    <button id="back-button" className="backT">
      <i className="fa fa-chevron-left"></i>
    </button>
  );
};


