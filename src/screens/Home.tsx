import { View, Text } from "react-native";

import { Stack, TextInput, IconButton } from "@react-native-material/core";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

export function Home() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  return (
    <View className="py-4 px-8 flex-1">
      <Stack spacing={24}>
        <TextInput label="Nome do Pet" variant="standard" />

        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Tipo de pet..."
        />

        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Porte do pet..."
        />

        <TextInput label="Idade" variant="standard" />
      </Stack>
    </View>
  );
}
