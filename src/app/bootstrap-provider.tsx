'use client';

import { useEffect, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function BootstrapProvider({ children }: Props) {
  useEffect(() => {
    // import('@/app/js/jquery.js');
    // import('@/app/js/vendors.min.js');
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
    // import('@/app/js/main.js');
  }, []);

  return <>{children}</>;
}
