import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Task } from '../store/types';
import TodoItem from '../../../core/components/TodoItem';

interface Props {
    todos: Array<Task>;
    toggleTodo: (id: number) => void;
}

function TodoList(props: Props) {
    
    function renderTodos(todos: Array<Task>) {
        return todos.map((todo, i) => {
            return <TodoItem
                        key={todo.id}
                        index={todo.id}
                        text={todo.task}
                        isCompleted={todo.isCompleted}
                        onTodoToggle={props.toggleTodo}                
                    />
        });
    }

    const completedTodos : Task[] = [];
    const incompleteTodos : Task[] = [];

    props.todos.forEach(todo => {
        if (todo.isCompleted) {
            completedTodos.push(todo);
        } else {
            incompleteTodos.push(todo);
        }
    });

    return (
        <div className="pure-g">
            <div className="pure-u-1-2 l-box">
                <StyledHeading>
                    To-do
                </StyledHeading>
                <StyledList>
                    {renderTodos(incompleteTodos)}
                </StyledList>   
            </div>
            <div className="pure-u-1-2 l-box">
                <StyledHeading>
                    Completed
                </StyledHeading>
                <StyledList>
                    {renderTodos(completedTodos)}
                </StyledList>
            </div>
        </div>
    );
}

export default TodoList;

const StyledList = styled.div`
    > * {
        margin-top: 10px;
        display: block;
        color: #444444;
    }
`;

const StyledHeading = styled('h4')`
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    size: 20px;
    color: #8B9DA7;
`;