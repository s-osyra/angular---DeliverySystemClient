import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatCardModule} from '@angular/material/card';
import { MatTabsModule} from '@angular/material/tabs';
import { PackageComponent } from './home-page/components/package/package.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button'; 
import { MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@Angular/common/http';
import { FinalObjectComponent } from './components/final-object/final-object.component';
import { ObjectListComponent } from './components/object-list/object-list.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { AirTransportComponent } from './home-page/components/air-transport/air-transport.component'; 
import { LandTransportComponent } from './home-page/components/land-transport/land-transport.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PackageComponent,
    FinalObjectComponent,
    ObjectListComponent,
    AirTransportComponent,
    LandTransportComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
