/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */
import { ConferenceListDisplayMode } from '../conference/conference-list-display-mode.enum';
import { ConferenceSearchDisplayMode } from '../conference/conference-search-display-mode.enum';
import { Theme } from '../conference/theme.enum';
import { Logo } from '../logo/logo.enum';

export class Configuration {

    backgroundColor: string;
    conferenceListDisplayMode: ConferenceListDisplayMode;
    conferenceSearchDisplayMode: ConferenceSearchDisplayMode;
    logo: Logo;
    shouldShowLinks: boolean;
    theme: Theme;

    constructor(args: Partial<Configuration> = {}) {
        this.backgroundColor = args.backgroundColor;
        this.conferenceSearchDisplayMode = args.conferenceSearchDisplayMode;
        this.conferenceListDisplayMode = args.conferenceListDisplayMode;
        this.logo = args.logo;
        this.shouldShowLinks = args.shouldShowLinks;
        this.theme = args.theme;
    }

}
