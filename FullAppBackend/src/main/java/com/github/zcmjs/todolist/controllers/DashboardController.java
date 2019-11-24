package com.github.zcmjs.todolist.controllers;

import com.github.zcmjs.todolist.dto.DashBoardDto;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/dashboard")
public class DashboardController {

    @GetMapping("welcome")
    private DashBoardDto getCustomized() {
        throw new RuntimeException("Runtime Exception !!!");
//        return new DashBoardDto( 1, "SUPER PARTIA KURWO");
    }

    @GetMapping("welcome/{name}")
    private DashBoardDto getCustomizedWithParameter(@PathVariable String name) {
        return new DashBoardDto( 1, "SUPER PARTIA KURWO " + name);
    }

}
