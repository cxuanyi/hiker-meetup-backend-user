import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserRepository } from '../_entity/user.repository';
// import { User } from '../_entity/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

describe('UserService', () => {
  let service: UserService;
  let userRepository;

  const mockUserRepository = () => ({

  });

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [UserService,
        { provide: UserRepository, useFactory: mockUserRepository }
      ],
    }).compile();

    // userRepository = await module.get<User>(User);
    // service = await module.get<UserService>(UserService);
  });

  it('FindMany User', async () => {
    return true;
  });
});
