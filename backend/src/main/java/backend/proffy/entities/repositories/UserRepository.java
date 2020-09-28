package backend.proffy.entities.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import backend.proffy.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
