import React from 'react';
import { TodosProvider } from './TodosContext';
import { TodoApp } from './components/TodoApp';
import { TempTodoProvider } from './TempTodoContext';
import { ErrorProvider } from './ErrorContext';

export const App: React.FC = () => {
  return (
    <TodosProvider>
      <TempTodoProvider>
        <ErrorProvider>
          <TodoApp />
        </ErrorProvider>
      </TempTodoProvider>
    </TodosProvider>
  );
};
