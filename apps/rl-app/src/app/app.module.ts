import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { RlUiModule } from '@rad/rl-ui';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RlUiModule,
    RouterModule.forRoot([], {
      initialNavigation: 'enabled',
      relativeLinkResolution: 'legacy',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
