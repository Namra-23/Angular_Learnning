import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-otp-verification',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent {
  otp: string = '';
  verificationResult: string = '';
  private http = inject(HttpClient);

  constructor() { }

  generateOtpAndSendEmail() {
    // Send request to the server to generate and send OTP to email
    this.http.post("http://localhost:3000/api/generate-otp", {}).subscribe({
      next: (res: any) => {
        if (res.success) {
          this.verificationResult = 'OTP sent to email successfully';
        } else {
          this.verificationResult = 'Failed to send OTP to email';
        }
      },
      error: (err: any) => {
        console.error("There was an error!!" + err);
      }
    });
  }

  verifyOtp() {
    const otpData = { otp: this.otp };
    this.http.post("http://localhost:3000/api/verify-otp", otpData).subscribe({
      next: (res: any) => {
        if (res.success) {
          this.verificationResult = 'OTP verified Successfully';
        } else {
          this.verificationResult = 'OTP verification Failed';
        }
      },
      error: (err: any) => {
        console.error("There was an error!!" + err);
      }
    });
  }
}
