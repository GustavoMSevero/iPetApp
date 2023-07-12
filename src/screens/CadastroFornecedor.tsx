import { View, Text } from "react-native";

import {
  Stack,
  TextInput,
  IconButton,
  Button,
} from "@react-native-material/core";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

export function CadastroFornecedor() {
  const [openState, setOpenState] = useState(false);
  const [openServiceType, setOpenServiceType] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  return (
    <View className="py-4 px-8 flex-1">
      <Stack spacing={8}>
        <TextInput label="Nome" variant="standard" />
        <TextInput label="Endereço" variant="standard" />
        <TextInput label="Número" variant="standard" />
        <TextInput label="Complemento" variant="standard" />
        <TextInput label="Cidade" variant="standard" />

        <DropDownPicker
          open={openState}
          value={value}
          items={items}
          setOpen={setOpenState}
          setValue={setValue}
          setItems={setItems}
          placeholder="Selecione o estado"
          zIndex={100}
        />

        <DropDownPicker
          open={openServiceType}
          value={value}
          items={items}
          setOpen={setOpenServiceType}
          setValue={setValue}
          setItems={setItems}
          placeholder="Tipo de serviço"
          zIndex={10}
        />

        <Button title="Salvar" />
      </Stack>
    </View>
  );
}
