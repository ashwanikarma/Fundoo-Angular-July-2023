import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { RegisterdemoComponent } from './components/registerdemo/registerdemo.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
{
  path:'resetpassword/:token',
  component:ResetpasswordComponent
},
{
  path:'forgetpassword',
  component:ForgetpasswordComponent
},
{
  path:'registerdemo',
  component:RegisterdemoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
