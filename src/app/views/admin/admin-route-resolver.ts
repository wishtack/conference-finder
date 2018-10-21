/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

export const adminRouteResolver = {

    ADMIN_PATH: 'admin',

    RULES_PATH: 'rules',

    SIGNIN_PATH: 'signin',

    getAdminRoute() {
        return ['/', this.ADMIN_PATH];
    },

    getSigninRoute() {
        return [...this.getAdminRoute(), this.SIGNIN_PATH];
    }

};
