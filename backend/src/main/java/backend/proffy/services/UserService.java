package backend.proffy.services;

import java.util.List;

import backend.proffy.entities.User;

public interface UserService {
    
    public User create(User newUser);
    
    public List<User> getAllUsers();

}
