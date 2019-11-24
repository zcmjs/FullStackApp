package com.github.zcmjs.todolist.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ToRemove {

    @GetMapping("/testkrawczyk")
    public String request() {
        return "Macoń ssie pały psom";
    }

}
