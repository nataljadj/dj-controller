import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()

export class DjControllerGuard implements CanActivate {

    canActivate() {
        return true;
    }
}