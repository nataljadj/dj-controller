import { Component, Input, ViewChild, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';

@Component({
    selector: 'track-player',
    templateUrl: 'track-player.component.html',
})

export class TrackPlayerComponent implements OnInit, OnChanges{
    @Input() trackList: any;
    @Input() globalPlay:boolean;
    @Input() globalVolumeValue:number;
    @Output() onCurrentTrackChange = new EventEmitter();
    @ViewChild ('audioPlayer') audioPlayer: any;

    public currentIndex: number = 0;
    public currentTrack: any = {};
    public isPlaying:boolean = false;
    public isLoaded:boolean = false;

    ngOnInit(){
        this.getCurrentIndex();
    }

    ngOnChanges(event: any){
        if(event.globalPlay){
          event.globalPlay.currentValue ? this.playTrack() : this.pauseTrack();
        }

        if(event.globalVolumeValue && this.audioPlayer.nativeElement){
          this.audioPlayer.nativeElement.volume = event.globalVolumeValue.currentValue;
        }
    }

    public playTrack(){
        if(this.trackList.length){
            if(this.isLoaded){
                this.audioPlayer.nativeElement.play();
            } else {
              this.load();
            }

          this.isPlaying = true;
        }
    }

    public pauseTrack(){
        if(this.audioPlayer.nativeElement){
          this.audioPlayer.nativeElement.pause();
          this.isPlaying = false;
        }
    }

    public nextTrack(){
        if((this.trackList.length - 1) > this.currentIndex ){
            this.currentIndex++;
            this.load();
            this.isLoaded = false;
        }
    }

    public previousTrack(){
        if(this.currentIndex > 0){
            this.currentIndex--;
            this.load();
            this.isLoaded = false;
        }
    }

    public makeSpeedSlower(){
        if(this.audioPlayer.nativeElement.playbackRate && this.isPlaying){
            this.audioPlayer.nativeElement.playbackRate -= 0.25;
        }
    }

    public makeSpeedFaster(){
        if(this.audioPlayer.nativeElement.playbackRate && this.isPlaying){
            this.audioPlayer.nativeElement.playbackRate += 0.25;
        }
    }

    public canPlay(){
        this.audioPlayer.nativeElement.play();
        this.isLoaded = true;
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