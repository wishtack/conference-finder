import { commonEnvironment } from './common-environment';

export const environment = {
    /* Object literal spreading (...commonEnvironment) doesn't make it through AOT. */
    firebase: commonEnvironment.firebase,
    production: true
};
