import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  findByEmail(email: string, includePassword = false) {
    const query = this.userModel.findOne({ email });
    if (includePassword) {
      return query.select('+passwordHash');
    }
    return query;
  }

  findById(id: string) {
    return this.userModel.findById(id);
  }

  createUser({
    name,
    email,
    passwordHash,
  }: {
    name: string;
    email: string;
    passwordHash: string;
  }) {
    const createdUser = new this.userModel({ name, email, passwordHash });
    return createdUser.save();
  }
}
