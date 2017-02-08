import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { SharedTackListService } from './shared-track-list.service';

@Injectable()

export class DjControllerGuard implements CanActivate {

    constructor(private sharedTackListService:SharedTackListService){}

    canActivate() {
        return !this.isTrackListsEmpty();
    }

    private isTrackListsEmpty(){
       return !(this.sharedTackListService.getFirstTrackList().length
                    || this.sharedTackListService.getSecondTrackList().length);
    }
}