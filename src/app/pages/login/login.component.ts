import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  error : string = ''
  loginForm : FormGroup = new FormGroup({
    email : new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required])
  })
  registerForm : FormGroup = new FormGroup({
    name : new FormControl(null,[Validators.required]),
    email : new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required])
  })
  isFormSectionMoved = true;
  constructor(private renderer: Renderer2, private apiService:ApiService,private router : Router){}
  ngOnInit(): void {
  }
  login() {
    this.isFormSectionMoved = true;
  }

  signup() {
    this.isFormSectionMoved = false;
  }
  registerTOPlatform(){
    const payload = this.registerForm.value
    this.apiService.register(payload).subscribe((res:any)=>{
      sessionStorage.setItem('user',JSON.stringify(res))
      this.error = ''
      console.log(res)
      this.goToPlans()
    },(err:any)=>{
      this.error = err.error.message
    })
  }
  loginTOPlatform(){
    const payload = this.loginForm.value
    this.apiService.login(payload).subscribe((res:any)=>{
      sessionStorage.setItem('user',JSON.stringify(res))
      this.error = ''
      console.log(res)
      this.goToPlans()
    },(err:any)=>{
      this.error = err.error.message
    })
  }
  goToPlans(){
    this.router.navigate(['_more'])
  }
  // googleSignion(){
  //   this.apiService.GoogleAuth().then((res)=>{
  //     console.log(res)
  //   })
    
  // }
}
