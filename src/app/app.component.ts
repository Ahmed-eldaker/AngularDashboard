import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./features/components/sidebar/sidebar.component";
import { NavbarComponent } from "./features/components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-dashboard';
}
