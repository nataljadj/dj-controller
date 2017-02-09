import {Component, Input, ViewChild, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
    selector: 'track-player',
    templateUrl: 'track-player.component.html',
})

export class TrackPlayerComponent implements OnInit{
    @Input() trackList: any;
    @Output() onCurrentTrackChange = new EventEmitter();
    @ViewChild ('audioPlayer') audioPlayer: any;

    public currentIndex: number = 0;
    public currentTrack: any = {};
    public isPlaying:boolean = false;
    public canPlayAgain:boolean = false;

    ngOnInit(){
        this.getCurrentIndex();
    }

    public playTrack(){
        if(this.trackList){
            if(this.canPlayAgain){
                this.audioPlayer.nativeElement.play();
            } else this.load();
        }

        this.isPlaying = true;
    }

    public pauseTrack(){
        this.audioPlayer.nativeElement.pause();
        this.isPlaying = false;
    }

    public nextTrack(){
        if(this.trackList.length > this.currentIndex ){
            this.currentIndex++;
            this.load();
            this.canPlayAgain = false;
        }
    }

    public previousTrack(){
        if(this.currentIndex > 0){
            this.currentIndex--;
            this.load();
            this.canPlayAgain = false;
        }
    }

    public makeSpeedSlower(){
        if(this.audioPlayer.nativeElement.playbackRate){
            this.audioPlayer.nativeElement.playbackRate -= 0.25;
        }
    }

    public makeSpeedFasrer(){
        if(this.audioPlayer.nativeElement.playbackRate){
            this.audioPlayer.nativeElement.playbackRate += 0.25;
        }
    }

    public canPlay(){
        this.audioPlayer.nativeElement.play();
        this.canPlayAgain = true;
        this.onCurrentTrackChange.emit(this.currentIndex);
    }

    private onSoundLoaded(evt:any) {
        this.currentTrack.src = evt.target.result;
    }

    private loadFileObject(fileObj:any, loadedCallback:any) {
        let reader = new FileReader();
        reader.onload = loadedCallback;
        reader.readAsDataURL( fileObj );
    }

    private getCurrentIndex(){
        this.currentIndex = this.trackList.findIndex((track:any) => track.selected);
        this.currentIndex === -1 ? this.currentIndex = 0 : this.currentIndex;
    }

    private load(){
        this.loadFileObject(this.trackList[this.currentIndex], this.onSoundLoaded.bind(this));
    }
}