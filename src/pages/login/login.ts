import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Global} from '../../Global';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';

@Component({
    templateUrl: 'login.html'
})

export class Login extends Global{
    constructor(public navCtrl: NavController, public af: AngularFireDatabase){
        super(navCtrl, af);
    }
}
