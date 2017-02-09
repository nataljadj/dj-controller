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
    public secondTmpIndex:number;
    public globalPlay:boolean = false;
    public globalVolumeValue:number = 0.2;

    constructor(private sharedTackListService:SharedTackListService) {}

    ngOnInit(){
        this.getTrackLists();
    }

    private getTrackLists(){
       this.firstTrackList = this.sharedTackListService.getFirstTrackList();
       this.secondTrackList = this.sharedTackListService.getSecondTrackList()
    }

    public playAll(){
        this.globalPlay = true;
    }

    public pauseAll(){
        this.globalPlay = false;
    }

    public changeVolumeValue($event: any){
      this.globalVolumeValue = $event.offsetX * $event.target.max / $event.target.offsetWidth
    }

    public setFirstSelectedTrack(index: number){
        if(this.tmpIndex !== index){
            this.firstTrackList[index].selected = true;
            if(this.tmpIndex !== undefined) {
                (this.firstTrackList[this.tmpIndex].selected = false);
            }
            this.tmpIndex = index;

            this.sharedTackListService.setFirstTrackList(this.firstTrackList);
        }
    }

    public setSecondSelectedTrack(index: number){
        this.secondTrackList[index].selected = true;
        if(this.secondTmpIndex !== undefined){
            this.secondTrackList[this.secondTmpIndex].selected = false;
        }

        this.secondTmpIndex = index;

        this.sharedTackListService.setSecondTrackList(this.secondTrackList);
    }
}