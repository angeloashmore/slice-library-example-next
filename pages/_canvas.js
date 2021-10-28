import { SimpleStoryRenderer } from "@slicemachine/next";

import { slicesMap } from "../slices";

export default function Renderer() {
  return <SimpleStoryRenderer slices={slicesMap} />;
}
