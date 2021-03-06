import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {SharedModule} from './shared/shared/shared.module';

//#region components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './containers/headers/headers.component';
import { FooterComponent } from './containers/footer/footer.component';
import { TaskComponent } from './components/task/task.component';
import { CategoryComponent } from './components/category/category.component';
import { StadComponent } from './components/stad/stad.component';
import { UserComponent } from './components/user/user.component';
//#endregion

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    FooterComponent,
    TaskComponent,
    CategoryComponent,
    StadComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
