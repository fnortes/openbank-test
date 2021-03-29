// @flow
import { useEffect } from "react";

export default function useScrollTop(dependency?: number): null {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [dependency]);

  return null;
}
