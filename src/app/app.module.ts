import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TechComponent } from './components/tech/tech.component';
import { CareerComponent } from './components/career/career.component';
import { IntroComponent } from './components/intro/intro.component';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    NotFoundComponent,
    TechComponent,
    CareerComponent,
    IntroComponent,
  ],
  imports: [AppRoutingModule, SharedModule],
  providers: [
    { provide: Window, useValue: window },
    { provide: Document, useValue: document },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
