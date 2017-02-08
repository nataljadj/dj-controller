import { Component, OnInit } from '@angular/core';
import { routerTransition } from './../shared/router.animation';
import { SharedTackListService } from '../shared/services/shared-track-list.service'

@Component({
    selector: 'upload-track',
    templateUrl: 'upload-track.component.html',
    animations: [routerTransition().toLeft],
    host: {'[@routerTransition]': ''}
})

export class UploadTrackComponent implements OnInit {

    public firstTrackList: any;
    public secondTrackList: any;

    constructor(private sharedTackListService:SharedTackListService) {}

    ngOnInit(){
        this.getTrackLists();
    }

    public putFirstTrackList(list:any){
        this.firstTrackList = list;
        this.sharedTackListService.setFirstTrackList(list);
    }

    public putSecondTrackList(list:any){
        this.secondTrackList = list;
        this.sharedTackListService.setSecondTrackList(list);
    }

    private getTrackLists(){
        this.firstTrackList = this.sharedTackListService.getFirstTrackList();
        this.secondTrackList = this.sharedTackListService.getSecondTrackList();
    }
}
