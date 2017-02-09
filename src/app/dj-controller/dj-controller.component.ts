import { Component, OnInit } from '@angular/core';
import { routerTransition } from './../shared/router.animation';
import { SharedTackListService } from '../shared/services/shared-track-list.service'

@Component({
    selector: 'dj-controller',
    templateUrl: 'dj-controller.component.html',
    animations: [routerTransition().toRight],
    host: {'[@routerTransition]': ''}
})

export class DjControllerComponent implements OnInit{

    public firstTrackList:any = [];
    public secondTrackList:any = [];
    public tmpIndex:number;
    public tmpIndex2:number;

    constructor(private sharedTackListService:SharedTackListService) {}

    ngOnInit(){
        this.getTrackLists();
    }

    private getTrackLists(){
       this.firstTrackList = this.sharedTackListService.getFirstTrackList();
       this.secondTrackList = this.sharedTackListService.getSecondTrackList()
    }

    public setFirstSelectedTrack(index: number){
        this.firstTrackList[index].selected = true;
        if(this.tmpIndex !== undefined) {
            (this.firstTrackList[this.tmpIndex].selected = false);
        }
        this.tmpIndex = index;

        this.sharedTackListService.setFirstTrackList(this.firstTrackList);
    }

    public setSecondSelectedTrack(index: number){
        this.secondTrackList[index].selected = true;
        if(this.tmpIndex2 !== undefined){
            this.secondTrackList[this.tmpIndex2].selected = false;
        }

        this.tmpIndex2 = index;

        this.sharedTackListService.setSecondTrackList(this.secondTrackList);
    }
}