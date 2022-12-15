import { sign, verify } from 'jsonwebtoken';

export class JwtUtil {
  public static generateToken(payload: any) {
    return sign(payload, process.env.SIGN_SECRET!, {
      expiresIn: '1h',
    });
  }

  public static verify(token: string) {
    return verify(token, process.env.SIGN_SECRET);
  }
}
