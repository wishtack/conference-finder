/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

export function setGoogleSiteTag(trackingId: string) {

    const firstScriptTag = document.getElementsByTagName('script')[0];
    const scriptTag = document.createElement('script');
    scriptTag.async = true;
    scriptTag.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(trackingId)}`;
    firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag);

    window['dataLayer'] = window['dataLayer'] || [];

    const gtag: any = window['gtag'] = function () {
        window['dataLayer'].push(arguments);
    };

    gtag('js', new Date());
    gtag('config', trackingId);

}
