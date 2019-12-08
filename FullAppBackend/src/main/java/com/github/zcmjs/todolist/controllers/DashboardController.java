package com.github.zcmjs.todolist.controllers;

import com.github.zcmjs.todolist.dto.DashBoardDto;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/dashboard")
public class DashboardController {

    @GetMapping("welcome")
    private DashBoardDto getCustomized() {
        throw new RuntimeException("Runtime Exception !!!");
    }

    @GetMapping("welcome/{name}")
    private DashBoardDto getCustomizedWithParameter(@PathVariable String name) {
        return new DashBoardDto( 1, "SUPER PARTIA KURWO " + name);
    }



}
