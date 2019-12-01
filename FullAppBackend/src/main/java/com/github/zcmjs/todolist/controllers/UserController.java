package com.github.zcmjs.todolist.controllers;

import com.github.zcmjs.todolist.api.AuthenticationBean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @PostMapping("login")
    public AuthenticationBean authorization () {
        return new AuthenticationBean("You are auth");
    }

}
