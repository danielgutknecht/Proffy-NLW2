package backend.proffy.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.proffy.entities.User;
import backend.proffy.entities.repositories.UserRepository;

@Service
public class UserServiceImplement implements UserService {

    @Autowired
    private UserRepository userRepository;
    
    public User create(User newUser) {
	return userRepository.save(newUser);
    }

    @Override
    public List<User> getAllUsers() {
	return userRepository.findAll();
    }
    
 

}
