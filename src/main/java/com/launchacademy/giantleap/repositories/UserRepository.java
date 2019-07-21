package com.launchacademy.giantleap.repositories;

import com.launchacademy.giantleap.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
  User findByUsername(String username);
}
