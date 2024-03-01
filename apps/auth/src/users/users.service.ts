import { AccessToken, CreateUserDto, User, Users } from '@app/common';
import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  create(createUserDto: CreateUserDto): User {
    return {
      createdAt: new Date().toISOString(),
      deletedAt: '',
      email: createUserDto.email,
      id: randomUUID(),
      nickname: createUserDto.nickname,
      password: createUserDto.password,
      updatedAt: new Date().toISOString(),
    };
  }

  findAll(): Users {
    return { users: this.users };
  }

  findOne(id: string): User {
    return this.users.find((users) => users.id === id);
  }

  login({ email, password }: { email: string; password: string }): User {
    const user = this.users.find(
      (users) => users.email === email && users.password === password,
    );
    if (user) {
      return user;
    }
    throw new NotFoundException('User not found');
  }

  remove(id: string) {
    const userIndex = this.users.findIndex((users) => users.id === id);
    if (userIndex !== -1) {
      return this.users.splice(userIndex)[0];
    }
    throw new NotFoundException(`User not found ${id} `);
  }

  refreshToken({ refreshToken }: { refreshToken: string }): AccessToken {
    if (refreshToken) return { accessToken: randomUUID() };
  }
}
