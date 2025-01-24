import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../services/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  //injection de dependance
  const authService = inject(AuthService);
  const router = inject(Router);
  //verification de l'état de l'authentification
  if(!authService.isAuthenticated()){
    router.navigate(['/login']);
    return false
  }
  return true;
};
