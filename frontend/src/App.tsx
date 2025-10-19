"use client";

import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [showInput, setShowInput] = useState(false);
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [updateInput, setUpdateInput] = useState<{ [key: number]: boolean }>(
    {}
  );

  const updateTask = (index: number) => {
    if (inputText.trim() === "") {
      alert("Por favor escreva algo");
      return;
    }
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return inputText;
      } else {
        return task;
      }
    });
    setTasks(newTasks);
    handleUpdateInput(index);
    setInputText("");
  };

  const handleUpdateInput = (index: number) => {
    setUpdateInput((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const removeTask = (index: number) => {
    const filterTask = tasks.filter((task, i) => i !== index);
    setTasks(filterTask);
  };

  const addTask = () => {
    if (inputText.trim() === "") return;
    setTasks([...tasks, inputText]);
    setInputText("");
    setShowInput(false);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center font-poppins">
      <div
        className="flex flex-col justify-center bg-custonShadow-200 rounded p-4"
        style={{ boxShadow: "0 10px 20px rgba(152, 197, 206, 0.5)" }}
      >
        <div className="flex flex-col text-center bg-custonRed-200 rounded p-4 w-80">
          <span className="flex flex-col text-white text-[20px] justify-center items-center mb-4">
            Lista de tarefas
            <span className="flex text-white text-[10px] border-b-[0.5px] border-b-custonRed-100">
              uma forma simples de se organizar
            </span>
          </span>

          <ul className="mb-4 ">
            {tasks.map((task, index) => (
              <div key={index}>
                {updateInput[index] ? (
                  <div className="flex justify-between items-center gap-2 ">
                    <input
                      type="text"
                      onChange={(e) => setInputText(e.target.value)}
                      className="flex-1 p-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-custonRed-200 text-white"
                    />

                    <Button
                      label="Atualizar"
                      type="button"
                      onClick={() => updateTask(index)}
                    />
                  </div>
                ) : (
                  <li
                    key={index}
                    className="flex justify-between p-1 border-b border-gray-300 text-left text-white "
                  >
                    {task}
                    <div className="flex gap-2">
                      <Button
                        label="Excluir"
                        type="button"
                        onClick={() => removeTask(index)}
                      />
                      <Button
                        label="Editar"
                        type="button"
                        onClick={() => handleUpdateInput(index)}
                      />
                    </div>
                  </li>
                )}
              </div>
            ))}
          </ul>

          {showInput && (
            <div className="flex gap-2 mb-2 items-center">
              <input
                type="text"
                placeholder="Digite a nova tarefa..."
                onChange={(e) => setInputText(e.target.value)}
                className="flex-1 p-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-custonRed-200 text-white"
              />
              <Button label="Salvar" onClick={addTask} type="button" />
            </div>
          )}

          <Button
            label={showInput ? "Cancelar" : "Nova Tarefa"}
            onClick={() => setShowInput(!showInput)}
            type="button"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
