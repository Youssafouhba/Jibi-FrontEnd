import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {

  }


  LoginDialog(): void {
    Swal.fire({
      html: this.getHtml(),
      showCancelButton: false,
      showConfirmButton: false,
      //preConfirm: () => this.onSubmit()
      customClass: {
        popup: 'p',
      }
    });
  }

  getHtml(): string {
    return `
      <main>
  <!-- Login area start -->
  <section class="login__area section-space">
    <div class="container">
      <div class="login__wrapper text-center mx-auto">
        <div class="login__intro mb-40">
          <h3 class="login__title">Welcome Again</h3>
          <p>Enter your credentials to acces your account</p>
        </div>
        <form action="#">
          <div class="login__input mb-25">
            <input type="email" placeholder="hello@finwise.com">
          </div>
          <div class="login__input mb-25">
            <input type="password" placeholder="Password">
          </div>
          <div class="login__option mb-20 d-sm-flex justify-content-between">
            <div class="login__remember">
              <input type="checkbox" id="login">
              <label for="login">Remember me</label>
            </div>
            <div class="login__forgot">
              <a href="forgot-light.html">Forgot password?</a>
            </div>
          </div>
          <div class="login__submit mb-25">
            <button class="bd-gradient-btn w-100" type="submit">Send Message</button>
          </div>
          <div class="login__divider mb-25">
            <div class="divider__line"></div>
            <div class="or">or</div>
            <div class="divider__line"></div>
          </div>
          <div class="login__gamil mb-30">
            <button class="login__gamil-btn" type="submit"><span><svg width="16" height="16" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.9978 9.69089C17.9978 9.04696 17.9472 8.39954 17.8393 7.76605H9.17969V11.4138H14.1386C13.9328 12.5903 13.2717 13.6311 12.3035 14.2924V16.6593H15.262C16.9993 15.0094 17.9978 12.5729 17.9978 9.69089Z" fill="#4285F4"></path>
                        <path d="M9.18072 18.9462C11.6568 18.9462 13.745 18.1074 15.2664 16.6594L12.3079 14.2925C11.4848 14.8703 10.4221 15.1975 9.1841 15.1975C6.78897 15.1975 4.75817 13.5302 4.02951 11.2886H0.976562V13.7286C2.53508 16.9274 5.70947 18.9462 9.18072 18.9462Z" fill="#34A853"></path>
                        <path d="M4.02618 11.2886C3.64161 10.1122 3.64161 8.83821 4.02618 7.66173V5.22174H0.976605C-0.325535 7.89841 -0.325535 11.0519 0.976605 13.7286L4.02618 11.2886Z" fill="#FBBC04"></path>
                        <path d="M9.18072 3.74937C10.4896 3.72849 11.7546 4.23668 12.7026 5.16951L15.3237 2.46499C13.664 0.856896 11.4612 -0.0272074 9.18072 0.00063836C5.70947 0.00063836 2.53508 2.01946 0.976562 5.22172L4.02613 7.6617C4.75142 5.41664 6.78559 3.74937 9.18072 3.74937Z" fill="#EA4335"></path>
                        </svg></span>
              Sign in with Google
            </button>
          </div>
          <div class="log__not-account">
            <p>Don’t have an account? <a href="register-light.html"> Register Now</a></p>
          </div>
        </form>
      </div>
    </div>
  </section>
  <!-- Login area end -->
</main>
    `;
  }
  onSubmit() {
    if (this.loginForm.valid) {
      // Process login data here
      console.log(this.loginForm.value);
      Swal.fire('Succès', 'Connexion réussie', 'success');
    } else {
      Swal.fire('Erreur', 'Veuillez remplir le formulaire correctement', 'error');
    }
  }
}
