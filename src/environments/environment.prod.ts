import { commonEnvironment } from './common-environment';

export const environment = {
    /* Object literal spreading (...commonEnvironment) doesn't make it through AOT. */
    googleTrackingId: 'UA-39998608-15',
    firebase: commonEnvironment.firebase,
    production: true
};
