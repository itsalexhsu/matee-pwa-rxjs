export class LoginForm {
  email: string
  password: string
}

export class phoneNumberForm {
  countryCode: string
  phoneNumber: string
}

export class NewPasswordForm {
  password: string
  confirmPassword: string
}

export class ResetPasswordForm {
  verificationCode: string
  password: string
  confirmPassword: string
}

export class ResetPasswordRequest {
  username: string
  verificationCode: string
  password: string
}

export class User {
  username: string
  email: string
  phoneNumber: string
  name: string
  password: string
  isDeveloper: boolean
}

export class Auth {
  username: string
  password: string
}

export class VerificationForm {
  verificationCode: number
}

export class VerificationRequest {
  user: User
  code: string
}