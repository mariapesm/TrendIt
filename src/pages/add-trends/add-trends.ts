import {Component} from '@angular/core';
import {Http} from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {Global} from '../../Global';

@Component({
    templateUrl: 'add-trend.html'
})

export class AddTrend extends Global{
    trend: any = {};
    trends: FirebaseListObservable<any>;
    successMessage: string;
    constructor(public navCtrl: NavController, public af: AngularFireDatabase){
        super(navCtrl, af);
        this.trends = this.af.list('/Trends');
    }

    addTrend(){
        if(this.trend.title){
            this.trend.time = Date.now();
            this.trend.uid = this.currUser.$key;

            this.trends.push(this.trend);
            this.successMessage = "Trend Added!";

            setTimeout(() => {
                this.navCtrl.pop(this);
            }, 1000);
        }
    }
}