package backend.proffy.endpoint;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import backend.proffy.entities.User;
import backend.proffy.services.UserService;

@RestController
@RequestMapping({"/user"})
public class UserController {
    
    @Autowired
    private UserService userService;
    
    @PostMapping
    public User create(@RequestBody User newUser) {
	return userService.create(newUser);	
    }
    
    @GetMapping
    public List<User> getAllUsers(){
	return userService.getAllUsers();
    }
  

}
