import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { ServerComponent } from "./server/server.component";
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [
    AppComponent,
    //this is where you register all of your components
    ServerComponent,
    ServersComponent
  ],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [],
  //bootstrap tells angular what component to recognize upon compiling...this has nothing to do with bootstrap css
  bootstrap: [AppComponent]
})
export class AppModule {}
