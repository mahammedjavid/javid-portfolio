import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { SharedService } from '../shared/shared.service';
import { GoogleAuthProvider } from 'firebase/auth';
// import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private limit = 1
  private apiKey = 'LBe9kbygipMe1P7gx3DrJFrohyI1bMfA3DP4F77z';
  private apiUrl = `https://quizapi.io/api/v1/questions?apiKey=${this.apiKey}&limit=${this.limit}`;

  constructor(private http: HttpClient , private sharedService : SharedService,) {} //  private afAuth: AngularFireAuth
  getQuestion(category:any) {
    if(category){
      this.apiUrl = this.apiUrl+`&category=${category}`
    }
    return this.http.get<any>(this.apiUrl);
  }
  getAllPlans(){
    return this.http.get(`${environment.backerUrl}/plans`);
  }
  login(data:any){
    return this.http.post(`${environment.backerUrl}/login`,data);
  }
  register(data:any){
    return this.http.post(`${environment.backerUrl}/register`,data);
  }
  mapThePlan(data:any){
    return this.http.post(`${environment.backerUrl}/apply-plan`,data);
  }
  getThePaymentUrl(sessionId:any){
    return this.http.get(`${environment.backerUrl}/redirect-to-payment/${sessionId}`);
  }
  getUserDetailsByAccessToken(){
    return this.http.get(`${environment.backerUrl}/me`);
  }
  getUserGroup(user_id:any){
    return this.http.get(`${environment.backerUrl}/get-user-groups?user_id=${user_id}`);
  }
  getAllUSer(){
    return this.http.get(`${environment.backerUrl}/user`);
  }
  createGroup(payload:any){
    return this.http.post(`${environment.backerUrl}/create-group`,payload);
  }
  addUserToGroup(payload:any){
    return this.http.post(`${environment.backerUrl}/add-user-to-group`,payload);
  }

  // GoogleAuth() {
  //   return this.AuthLogin(new GoogleAuthProvider());
  // }
  // async AuthLogin(provider: GoogleAuthProvider) {
  //   try {
  //     const result = await this.afAuth
  //       .signInWithPopup(provider);
  //     console.log('You have been successfully logged in!');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}
