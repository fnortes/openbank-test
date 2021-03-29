// @flow
import * as React from "react";
import { LoaderWrapper, Loader } from "./styles";

type Props = {
  loading: boolean,
};

export default function Spinner({ loading = false }: Props): React.Node {
  return loading ? (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  ) : null;
}
