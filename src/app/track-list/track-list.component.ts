import {Component, Input, Output, EventEmitter} from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
    selector: 'track-list',
    templateUrl: 'track-list.component.html',
})

export class TrackListComponent {
    @Input() trackList:any;
    @Input() name: string;
    @Output() onLoad = new EventEmitter();

    public onFileUpload(e: any){
        let tracks = e.target.files;
        this.trackList.push.apply(this.trackList, tracks);
        this.onLoad.emit(this.trackList);
    }

    public removeTrack(index: number){
        this.trackList.splice(index,1);
        this.onLoad.emit(this.trackList);
    }
}