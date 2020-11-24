import { FormGroup } from '@angular/forms';

export function ConfirmPassword(control: FormGroup) {
    const password = control.get('password').value;
    const confirmPassword = control.get('confirmPassword').value;
    return password === confirmPassword ? null : { 'confirmPassword': true };
}
