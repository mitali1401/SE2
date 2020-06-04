import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { MatSliderModule } from '@angular/material/slider';
import { GruopComponent } from './gruop/gruop.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GroupListComponent } from './group-list/group-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserGroupComponent } from './user-group/user-group.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { SideComponentComponent } from './side-component/side-component.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserGroupListComponent } from './user-group-list/user-group-list.component';
import { UserGroupInfoComponent } from './user-group-info/user-group-info.component';
import { UserFormComponentComponent } from './user-form-component/user-form-component.component';
import { QuerycomponentComponent } from './querycomponent/querycomponent.component';
import { UserSideComponentComponent } from './user-side-component/user-side-component.component';
import { LeaveComponentComponent } from './leave-component/leave-component.component';
import { AttendanceComponentComponent } from './attendance-component/attendance-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateUserComponent,
    GruopComponent,
    HomePageComponent,
    GroupListComponent,
    UserListComponent,
    UserGroupComponent,
    HeaderComponentComponent,
    SideComponentComponent,
    EditUserComponent,
    UserGroupListComponent,
    UserGroupInfoComponent,
    UserFormComponentComponent,
    QuerycomponentComponent,
    UserSideComponentComponent,
    LeaveComponentComponent,
    AttendanceComponentComponent
  ],
  imports: [
    MatSidenavModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    HttpClientModule,
    AutocompleteLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
