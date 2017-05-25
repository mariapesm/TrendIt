import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Global} from '../../Global';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {AddTrend} from '../add-trends/add-trends';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage extends Global{
  trends: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public af: AngularFireDatabase) {
    super(navCtrl, af);

    this.trends = this.af.list('/Trends');

  }

  remove(trend){
    if(this.currUser){
      if(trend.uid == this.currUser.$key){
        this.trends.remove(trend);
      }
    }
  }

  addTrend(){
    this.navCtrl.push(AddTrend);
  }

}
