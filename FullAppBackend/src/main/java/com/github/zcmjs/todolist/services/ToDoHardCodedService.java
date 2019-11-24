package com.github.zcmjs.todolist.services;

import com.github.zcmjs.todolist.entities.ToDo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ToDoHardCodedService {
    private static List<ToDo> allToDos;
    private static Long currentIndex = 0L;

    static {
        allToDos = new ArrayList<>(Arrays.asList(
                new ToDo(++currentIndex, "macon", "ssanie pal", new Date(), false),
                new ToDo(++currentIndex, "stefan", "granie na playu", new Date(), false),
                new ToDo(++currentIndex, "warol", "kojtyla", new Date(), false),
                new ToDo(++currentIndex, "JAzen", "Jerbac wisle", new Date(), false)
        ));
    }

    public ToDo save(ToDo toDo) {
        if(toDo.getId() == null) {
            toDo.setId(++currentIndex);
        } else {
            removeById(toDo.getId());
        }
        allToDos.add(toDo);
        return toDo;
    }

    public List<ToDo> getFilledToDoList() {
        return allToDos;
    }

    public void removeById(Long id) {
        allToDos = allToDos.stream()
                .filter(toDo -> !toDo.getId().equals(id))
                .collect(Collectors.toList());
    }
}
