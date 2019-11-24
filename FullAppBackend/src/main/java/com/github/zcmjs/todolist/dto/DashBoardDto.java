package com.github.zcmjs.todolist.dto;

public class DashBoardDto {

    private Integer id;
    private String description;

    public DashBoardDto() {
    }

    public DashBoardDto(Integer id, String description) {
        this.id = id;
        this.description = description;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}
