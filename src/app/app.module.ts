// Angular
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// Componentes
import { AppComponent } from "./app.component";
import { ComponentsModule } from "./modules/components.module";

@NgModule({
  declarations: [
    AppComponent,
    ComponentsModule
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
