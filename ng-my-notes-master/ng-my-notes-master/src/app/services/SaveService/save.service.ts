import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SaveService {

  $saveSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  $saveObservable: Observable<boolean>;

  $deleteSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  $deleteObservable: Observable<boolean>;

  constructor() { 
    this.$saveObservable = this.$saveSubject.asObservable();
    this.$deleteObservable = this.$deleteSubject.asObservable();
  }
}
