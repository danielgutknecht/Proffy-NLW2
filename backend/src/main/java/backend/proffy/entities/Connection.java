package backend.proffy.entities;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Connection {
    
    @Id
    private Long id;
    @ManyToOne(fetch = FetchType.LAZY)
    private User user;
    
    public Connection() {
	
    }

    public Connection(Long id, User user) {
	super();
	this.id = id;
	this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
      
}
