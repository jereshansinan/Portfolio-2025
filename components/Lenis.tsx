import React, { PropsWithChildren } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

const LenisWrapper = ({ children }: PropsWithChildren) => {
  return (
    <ReactLenis root options={{ duration: 1.5, smoothWheel: true }}>
      {children as any}
    </ReactLenis>
  );
};

export default LenisWrapper;
