import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { PipesComponent } from './pipes/pipes.component';
import { AgeComponent } from './pipes/age/age.component';
import { AgecalPipe } from './pipes/agecal.pipe';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    ChildComponent,
    PipesComponent,
    AgeComponent,
    AgecalPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
