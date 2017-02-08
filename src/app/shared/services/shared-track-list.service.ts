import { Injectable } from '@angular/core'

@Injectable()

export class SharedTackListService {
    private firstTrackList: any = [];
    private secondTrackList: any = [];

    public getFirstTrackList() {
        return this.firstTrackList;
    }

    public setFirstTrackList(list: any){
        this.firstTrackList = list;
    }

    public getSecondTrackList() {
        return this.secondTrackList;
    }

    public setSecondTrackList(list:any){
        this.secondTrackList = list;
    }
}