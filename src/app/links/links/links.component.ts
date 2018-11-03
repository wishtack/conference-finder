import { Component } from '@angular/core';

@Component({
    selector: 'wt-links',
    templateUrl: './links.component.html',
    styleUrls: ['./links.component.scss']
})
export class LinksComponent {

    linkList = [
        {
            pictureUri: require('./twitter.svg'),
            text: '@yjaaidi',
            uri: 'https://twitter.com/yjaaidi'
        },
        {
            pictureUri: require('./wishtack.svg'),
            text: 'Wishtack.io',
            uri: 'https://wishtack.io'
        },
        {
            pictureUri: require('./wishtack.svg'),
            text: 'younes@wishtack.com',
            uri: 'mailto:younes@wishtack.com'
        },
        {
            pictureUri: require('./github.png'),
            text: 'Reactive Component Loader (Wishtack Steroids)',
            uri: 'https://github.com/wishtack/wishtack-steroids'
        },
        {
            pictureUri: require('./github.png'),
            text: 'Conference Finder',
            uri: 'https://github.com/wishtack/wishtack-conference-finder'
        },
        {
            pictureUri: require('./github.png'),
            text: 'Other repos',
            uri: 'https://github.com/wishtack'
        }
    ];

}
