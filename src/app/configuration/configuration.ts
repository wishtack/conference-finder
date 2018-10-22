/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */
import { ConferenceListDisplayMode } from '../conference/conference-list-display-mode';
import { ConferenceSearchDisplayMode } from '../conference/conference-search-display-mode';
import { Theme } from '../conference/theme';

export class Configuration {

    conferenceListDisplayMode: ConferenceListDisplayMode;
    conferenceSearchDisplayMode: ConferenceSearchDisplayMode;
    theme: Theme;

    constructor(args: Partial<Configuration> = {}) {
        this.conferenceSearchDisplayMode = args.conferenceSearchDisplayMode;
        this.conferenceListDisplayMode = args.conferenceListDisplayMode;
        this.theme = args.theme;
    }

}
