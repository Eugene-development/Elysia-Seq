var { merge } = require('lodash');

import { categoryResolver } from "../../entities/category/resolver";
import { rubricResolver } from "../../entities/rubric/resolver";

export const resolvers = merge({}, categoryResolver, rubricResolver);
