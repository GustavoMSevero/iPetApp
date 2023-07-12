import { Button, Stack, TextInput } from "@react-native-material/core";
import { Image, View, Text } from "react-native";

export function Login() {
  return (
    <View className="flex-1 p-8">
      <Stack spacing={4}>
        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          className="w-full h-32 rounded-md"
        />

        <TextInput label="Usuário" variant="standard" />
        <TextInput label="Senha" variant="standard" />

        <Button title="Logar" />
        <View>
          <Text className="uppercase text-center my-4">Ou cadastrar com</Text>
        </View>
        <Button color="white" title="Google" />
        <Button color="#222" title="E-mail e senha" />
      </Stack>
    </View>
  );
}
