package com.github.zcmjs.todolist.controllers;

import com.github.zcmjs.todolist.entities.ToDo;
import com.github.zcmjs.todolist.services.ToDoHardCodedService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:4200")
public class ToDoController {
    private final ToDoHardCodedService todoService;

    public ToDoController(ToDoHardCodedService todoService) {
        this.todoService = todoService;
    }

    @GetMapping("/{username}/todos")
    public List<ToDo> getAllToDoList(String username) {
        return this.todoService.getFilledToDoList();
    }

    @GetMapping("/{username}/todos/{id}")
    public ToDo getAllToDoList(@PathVariable Long id) {
        return todoService.getFilledToDoList().stream()
                .filter(toDo -> toDo.getId().equals(id)).findFirst().get();
    }

    @DeleteMapping("/{username}/todos/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void removeToDo(@PathVariable Long id) {
        this.todoService.removeById(id);
    }

    @PutMapping("/{username}/todos/{id}")
    @ResponseStatus(value = HttpStatus.OK)
    public ToDo editTodo(@PathVariable String username, @PathVariable Long id, @RequestBody ToDo todo) {
        return this.todoService.save(todo);
    }

    @PostMapping("/{username}/todos/")
    @ResponseStatus(value = HttpStatus.CREATED)
    public ResponseEntity<Void> createTodo(@PathVariable String username, @RequestBody ToDo todo) {
        ToDo createdToDo = this.todoService.save(todo);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                                             .buildAndExpand(createdToDo.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }
}
