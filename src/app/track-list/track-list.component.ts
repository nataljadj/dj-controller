import {Component, Input, Output, EventEmitter} from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
    selector: 'track-list',
    templateUrl: 'track-list.component.html',
})

export class TrackListComponent {
    @Input() trackList:any;
    @Output() onLoad = new EventEmitter();

    private readonly URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

    public uploader:FileUploader = new FileUploader({url:this.URL});

    public onFileUpload(e: any){
        this.trackList = this.uploader.queue;
        this.onLoad.emit(this.trackList);
    }

    public removeTrack(index: number){
        this.trackList.splice(index,1);
        this.onLoad.emit(this.trackList);
    }
}