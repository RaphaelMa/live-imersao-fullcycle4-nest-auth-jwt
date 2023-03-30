import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

//bcrypt
@Injectable()
export class AuthService {
  constructor(private http: HttpService) {}

  async login(username: string, password: string) {
    const { data } = await firstValueFrom(this.http.post(
        'http://host.docker.internal:8080/auth/realms/carrefour/protocol/openid-connect/token',
        new URLSearchParams({
          client_id: 'nest-carrefour',
          client_secret: 'EEOSpswFd3Xgrf3YwRrdBy9r9xUmxjyl',
          grant_type: 'password',
          username,
          password
        }),
      ),
    );
    return data;
  }
}
//auth0 - jsonwebtoken


