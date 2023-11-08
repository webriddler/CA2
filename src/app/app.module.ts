import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyformComponent } from './components/myform/myform.component';
import { FormsModule } from '@angular/forms';
import { Data1Component } from './components/data1/data1.component';
import { RouterModule } from '@angular/router';
import { Data2Component } from './components/data2/data2.component';
import { PostComponent } from './components/post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from './posts.service';

@NgModule({
  declarations: [
    AppComponent,
    MyformComponent,
    Data1Component,
    Data2Component,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
