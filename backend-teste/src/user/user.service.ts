import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

export type User = any;

@Injectable()
export class UserService {
  private readonly users = [];

  constructor() {
    this.initializeUsers();
  }

  private async initializeUsers() {
    const saltRounds = 10;
    const adminPassword = 'adminadmin';
    const hashedPassword = await bcrypt.hash(adminPassword, saltRounds);

    this.users.push({
      userId: 1,
      username: 'admin',
      password: hashedPassword,
    });
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.findOne(username);
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
  }
}
