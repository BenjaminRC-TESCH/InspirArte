import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  email = '';
  password = '';
  horizontalPosition: MatSnackBarHorizontalPosition = 'center'; 
  verticalPosition: MatSnackBarVerticalPosition = 'top'; 

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  login(): void {
    if (!this.email || !this.password) {
      this.openSnackBar('El correo electrónico y la contraseña son obligatorios.', 'error-snackbar');
      return;
    }

    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        console.log('Login successful', response);
        
        const username = response.user?.username;
        if (username) {
          this.openSnackBar(`¡Bienvenido de nuevo, ${username}!`, 'success-snackbar');
        } else {
          this.openSnackBar('Bienvenido de nuevo!', 'success-snackbar');
        }

        this.router.navigate(['/']); 
      },
      (error) => {
        console.error('Error en el inicio de sesión', error);
        if (error.status === 404 || error.status === 401) {
          this.openSnackBar('Correo electrónico o contraseña incorrectos. Inténtalo de nuevo.', 'error-snackbar');
        } else {
          this.openSnackBar('Error en el inicio de sesión. Por favor, inténtalo de nuevo más tarde.', 'error-snackbar');
        }
      }
    );
  }
  private openSnackBar(message: string, panelClass: string): void {
    const snackBarRef = this.snackBar.open(message, 'Cerrar', {
      duration: 4000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: panelClass,
    });
  }
}
