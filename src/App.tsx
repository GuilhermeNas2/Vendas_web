import LoginScreen from './modules/login/screens/LoginScreen';

function App() {
  return <LoginScreen />;
}

export default App;

// useCallback(( Essa só renderiza uma vez, usada para melhorar performance em funçoes grandes que n necessitam ser renderizadas)=>{

// },[]);

// const {name, SetName} = useState(renderizar novamente a informação no parametro);

// useEffect((sempre vai ser usado para notificar mudanças, as coisas pasam por aqui)=>{

// },[]);

// useMemo (Usado para aliviar o processamento em funçoes grande, ira renderizar uma vez)
