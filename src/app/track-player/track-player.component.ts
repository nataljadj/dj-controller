import { Component, Input } from '@angular/core';

@Component({
    selector: 'track-player',
    templateUrl: 'track-player.component.html',
})

export class TrackPlayerComponent {
    @Input() trackList: any;

    constructor() {}

    ngOnInit(){
        if(this.trackList){
            this.trackList.forEach((track:any) => {

                track.uploader.onCompleteItem = (response:any, status:any, headers:any) => {
                    console.log(response, status, headers)
                };
                if(!track.isUploading){
                    track.upload();
                }
            });
        }

    }

    private onUploaded(response:any, status:any, headers:any){
        console.log(response, status, headers)
    }
}