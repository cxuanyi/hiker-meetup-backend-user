import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserRepository } from '../_entity/user.repository';
import { User } from '../_entity/user.entity';

const mockUserRepository = () => ({
  getUsers: jest.fn()
});

describe('UserService', () => {
  let service;
  let userRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [UserService,
        { provide: UserRepository, useFactory: mockUserRepository }
      ],
    }).compile();

    service = await module.get<UserService>(UserService);
    userRepository = await module.get<UserRepository>(UserRepository);
  });

  it('User: Get ALL users', async () => {
    // Without this line, the console.log() inside [await service.getUsers(userFilter);] will return empty
    userRepository.getUsers.mockResolvedValue({
      "_user_id": "2",
      "_email": "pepepoopoo@pepoopepoo.com",
      "_user_name": "pepepoopoo",
      "_description": "poo poo poo poo pe pe pe pe"
    });

    expect(userRepository.getUsers).not.toHaveBeenCalled();

    const userFilter: User = new User();
    const users = await service.getUsers(userFilter);

    expect(userRepository.getUsers).toHaveBeenCalled();
    expect(users).not.toEqual({
      "_user_id": "1",
      "_email": "testingtester@test.com",
      "_user_name": "testingtester",
      "_description": "test test here, test test there."
    });
  });
});
