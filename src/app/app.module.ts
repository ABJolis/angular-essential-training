import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [], // <- metadata property used to bring in other angular modules that our module will need
  declarations: [], // <- property used to make components, directives and pipes available to our module, that don't come from another module
  bootstrap: [] // <-- used for a root module, and lets angular know which component or components will be the starting point for the bootstrap process - basically, the entry point for the bootstrap process
})
export class AppModule {}

