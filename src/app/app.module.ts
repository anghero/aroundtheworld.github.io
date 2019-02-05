import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './common/material.module';
import { RoutesModule } from './common/routes.module';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './landing-page/header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutUsComponent } from './landing-page/about-us/about-us.component';
import { SearchComponent } from './landing-page/search/search.component';
import { TableComponent } from './landing-page/table/table.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './landing-page/gallery/gallery.component';
import { GalleryDialogComponent } from './landing-page/gallery/gallery-dialog/gallery-dialog.component';
import { ContactFormComponent } from './landing-page/contact-form/contact-form.component';
import { MapComponent } from './landing-page/map/map.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    NavigationComponent,
    AboutUsComponent,
    AboutUsPageComponent,
    SearchComponent,
    TableComponent,
    FooterComponent,
    GalleryComponent,
    GalleryDialogComponent,
    ContactFormComponent,
    MapComponent
  ],
  imports: [
    FormsModule,
    RoutesModule,
    RoutesModule,
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  entryComponents: [GalleryDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
