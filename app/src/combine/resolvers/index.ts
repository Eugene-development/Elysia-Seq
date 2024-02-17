var _ = require('lodash');

import { categoryResolver } from "../../entities/category/resolver";
import { rubricResolver } from "../../entities/rubric/resolver";

export const resolvers = _.merge({}, categoryResolver, rubricResolver);
