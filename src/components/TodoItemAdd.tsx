import React, { ChangeEvent, FormEvent, useState } from 'react';

type TodoItemAddProps = {
  onAdd: (text: string) => void;
}

function TodoItemAdd({ onAdd }: TodoItemAddProps) {
  const [value, setValue] = useState("");
}