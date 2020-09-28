package backend.proffy.entities;

import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Classes {
    
    @Id
    private Long id;
    private String subject;
    private Double cost;
    @ManyToOne(fetch = FetchType.LAZY)
    private User user;
    @OneToMany(mappedBy = "classes", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<Schedule> schchedule;
    
    public Classes() {
	
    }

    public Classes(Long id, String subject, Double cost, User user, Set<Schedule> schchedule) {
	super();
	this.id = id;
	this.subject = subject;
	this.cost = cost;
	this.user = user;
	this.schchedule = schchedule;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public Double getCost() {
        return cost;
    }

    public void setCost(Double cost) {
        this.cost = cost;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Set<Schedule> getSchchedule() {
        return schchedule;
    }

    public void setSchchedule(Set<Schedule> schchedule) {
        this.schchedule = schchedule;
    }
      
}
