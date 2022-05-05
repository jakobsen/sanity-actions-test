import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import badge from "./badge";
import banner from "./banner";
import heroImage from "./heroImage";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: "default",
  types: schemaTypes.concat([badge, banner, heroImage]),
});
