package ru.kata.spring.boot_security.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.exception_handling.NoSuchUserException;
import ru.kata.spring.boot_security.demo.models.Role;
import ru.kata.spring.boot_security.demo.models.User;
import ru.kata.spring.boot_security.demo.service.RoleService;
import ru.kata.spring.boot_security.demo.service.UserService;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminRest {

    private final UserService userService;
    private final RoleService roleService;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public AdminRest(UserService userService, RoleService roleService, PasswordEncoder passwordEncoder) {
        this.userService = userService;
        this.roleService = roleService;
        this.passwordEncoder = passwordEncoder;
    }

    @GetMapping
    public ResponseEntity<List<User>> showAllUsers() {
        return new ResponseEntity<>(userService.findAll(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<List<User>> saveUser(@RequestBody User user) {

        userService.save(user);
        return new ResponseEntity<>(userService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/roles")
    public  ResponseEntity<List<Role>> showAllRoles() {
        return new ResponseEntity<>(roleService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/auth")
    public ResponseEntity<User> getAuthUser(Principal principal) {
        User response = userService.findByUsername(principal.getName());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }


//
//
//    @GetMapping("/users/{id}")
//    public User showUser(@PathVariable("id") long id) {
//        User user = userService.findById(id);
//        if (user == null) {
//            throw new NoSuchUserException("User with ID " + id + " not found");
//        }
//        return user;
//    }
//
//    @PostMapping("/users")
//    public List<User> saveUser(@RequestBody User user) {
//        userService.save(user);
//        return userService.findAll();
//    }
//
//    @PutMapping("/users")
//    public List<User> updateUser(@RequestBody User user) {
//        userService.save(user);
//        return userService.findAll();
//    }
//
//    @DeleteMapping("/users/{id}")
//    public List<User> deleteUser(@PathVariable long id) {
//        User user = userService.findById(id);
//        if (user == null) {
//            throw new NoSuchUserException("There is no user with ID " + id);
//        }
//        userService.deleteById(id);
//        return userService.findAll();
//    }


}





