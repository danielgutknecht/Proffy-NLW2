package backend.proffy.entities.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import backend.proffy.entities.Connection;

@Repository
public interface ConnectionRepository extends JpaRepository<Connection, Long>{
    
    @Query("select count(c.user) from Connection c")
    public Long conuntConnection();
}
