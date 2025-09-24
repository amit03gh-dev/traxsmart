'use client';

import { useEffect, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function BootstrapProvider({ children }: Props) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return <>{children}</>;
}
