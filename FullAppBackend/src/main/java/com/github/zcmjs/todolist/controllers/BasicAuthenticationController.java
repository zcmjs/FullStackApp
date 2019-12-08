package com.github.zcmjs.todolist.controllers;

import com.github.zcmjs.todolist.dto.AuthenticationBean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BasicAuthenticationController {

    @GetMapping(path = "/basicauth")
    public AuthenticationBean helloBean() {
        return new AuthenticationBean("You are authenticated !!!");
    }

}
