import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signupForm:NgForm;

  defaultQuestion  = "pet";
  answer='';
  genders=['male','female'];
  submitted = false;

  user = {
    userName:'',
    email:'',
    secretQuestion:'',
    answer:'',
    gender:''
  }

  suggestUserName() {
    const suggestedName = 'Superuser';

    // this.signupForm.setValue({
    //   userData:{
    //     username:suggestedName,
    //     email:'abc@gmail.com'
    //   },
    //   secret:'pet',
    //   gender:'male',
    //   questionAnwser:''
    // })

    this.signupForm.form.patchValue({
      userData:{
        username:suggestedName
      }
    })

  //   //console.log(this.signupForm.username)

   }


  onSubmit(){
    this.submitted = true;

    //console.log(this.user.email)
    this.user.userName = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnwser;
    this.user.gender = this.signupForm.value.gender;
    this.signupForm.reset();
   /// console.log(this.signupForm);

  }

  // onSubmit(form:NgForm){
  //   console.log(form);

  // }
}
