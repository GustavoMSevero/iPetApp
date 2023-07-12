import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CadastroPet } from "./screens/CadastroPet";
import { Login } from "./screens/Login";
import { CadastroFornecedor } from "./screens/CadastroFornecedor";
import { CadastroUsuario } from "./screens/CadastroUsuario";
import { Home } from "./screens/Home";
import { HomeTabs } from "./screens/Home/routes";

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#3369ff" },
          headerTitleStyle: { color: "#fff" },
        }}
      >
        <Stack.Screen name="Principal" component={HomeTabs} />
        <Stack.Screen name="Cadastro Usuário" component={CadastroUsuario} />
        <Stack.Screen
          name="Cadastro Fornecedor"
          component={CadastroFornecedor}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastrar Pet" component={CadastroPet} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
