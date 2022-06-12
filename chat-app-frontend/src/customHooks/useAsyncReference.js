import React from "react";

export function useAsyncReference(value) {
  const ref = React.useRef(value);
  const [, forceRender] = React.useState(false);

  function updateState(newState) {
    ref.current = newState;
    forceRender((s) => !s);
  }

  return [ref, updateState];
}
