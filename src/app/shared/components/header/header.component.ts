import { Component,EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAdmin = false;
  @Output () tooggleSidenav = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  OnToggleSidenav(): void {
    this.tooggleSidenav.emit();

  }

}
