package backend.proffy.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import backend.proffy.entities.repositories.ConnectionRepository;

@Component
public class ConnectionServiceImplement implements ConnectionSevice {

    @Autowired
   private ConnectionRepository connectionRepository;

    @Override
    public Long countConnection() {
	return connectionRepository.conuntConnection();
    }
    
   
    
    

}
