package com.krawczyk.test;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ToRemove2 {

    @GetMapping("/testkrawczyk2")
    public String request() {
        return "Krawczyk też ssie pały psom";
    }
}
