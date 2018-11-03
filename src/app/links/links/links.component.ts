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
            pictureUri: require('./github.png'),
            text: 'Wishtack Steroids & Conference Finder',
            uri: 'https://github.com/wishtack'
        }
    ];

}
