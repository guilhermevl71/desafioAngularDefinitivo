import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-logout',
  imports: [CommonModule],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  dropdownOpen = false;

  constructor(private router: Router) {}

toggleDropdown() {
  this.dropdownOpen = !this.dropdownOpen;
}

  logout() {
    localStorage.removeItem('usuario');
    this.router.navigate(['/']);
  }
}
