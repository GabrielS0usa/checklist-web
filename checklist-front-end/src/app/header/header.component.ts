import { Component, Input, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  @Input() sidenav!: MatSidenav

  ngOnInit(): void {
  }

  public openSideNav(){
    this.sidenav.toggle()
  }

}
