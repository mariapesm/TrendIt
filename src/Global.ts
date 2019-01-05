import {NavController, NavParams} from 'ionic-angular';
import {tokenNotExpired} from 'angular2-jwt';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';

declare var Auth0Lock: any;

export class Global{
    currUser: any;
    authError: any;
    lock = new Auth0Lock('qeAOUbepiq3o2OPh6K72RxAKsU7vAPui', 'alexuser.auth0.com', {});
    constructor(public navCtrl: NavController, public af: AngularFireDatabase){
        this.currUser = JSON.parse(localStorage.getItem('profile'));
        let users = this.af.list('/Users');

        if(this.currUser){
            users.subscribe(_users => {
                let user = _users.filter(u => {
                    return (u.email == this.currUser.email);
                })[0];

                if(user){
                    this.currUser = user;
                    console.log(this.currUser);
                }else{
                    let newUser = {
                        email: this.currUser.email,
                        displayName: this.currUser.nickname,
                        picture: this.currUser.picture,
                        rank: 'm'
                    }

                    users.push(newUser);
                    this.currUser = newUser
                }
            });
        }

        this.lock.on('authenticated', authResult => {
            localStorage.setItem('id_token', authResult.idToken);
            this.currUser = authResult;

            if(this.currUser){
                if(users){
                        users.subscribe(u => {
                            
                            let user = u.filter(_u => { return (_u.email == this.currUser.email); })[0];
                            
                            if(!user){
                                let newUser = {
                                    display_name: this.currUser.nickname,
                                    email: this.currUser.email,
                                    picture: this.currUser.picture,
                                    rank: 'm'
                                }
                                users.push(newUser);
                                this.currUser = newUser;
                                console.log(authResult);
                                console.log(this.currUser);
                            }else
                                this.currUser = user;
                        });
                }
            }
            

            this.lock.getProfile(authResult.idToken, (error, profile) => {
                if (error) {
                    this.authError = error;
                    return;
                }

                localStorage.setItem('profile', JSON.stringify(profile));
                this.currUser = profile;
                //console.log(profile);
            });

        });
    }

    public login(){
        this.lock.show();
    }

    public logout(){

    }

    public loggedIn(){
        return tokenNotExpired();
    }
}
