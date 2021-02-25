import { Component, OnInit } from '@angular/core';
import { faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo = faMoneyCheckAlt
  constructor() { }

  ngOnInit(): void {
  }

}
