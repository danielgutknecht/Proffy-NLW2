package backend.proffy.endpoint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import backend.proffy.services.ConnectionSevice;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping({"/connection"})
public class ConnectionController {
    
    @Autowired
    private ConnectionSevice connectionSevice;
    
    @GetMapping
    public Long getCountConnection() {
	return connectionSevice.countConnection();
    }
    
   
}
