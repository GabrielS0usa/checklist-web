import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule,
    CommonModule,
    MatListModule,
    MatIconModule, RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent { }
