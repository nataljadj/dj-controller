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

    constructor(private sharedTackListService:SharedTackListService) {}

    ngOnInit(){
        this.getTrackLists();
    }

    private getTrackLists(){
       this.firstTrackList = this.sharedTackListService.getFirstTrackList();
    }
}