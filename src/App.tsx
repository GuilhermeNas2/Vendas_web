import type { Router as RemixRouter } from '@remix-run/router';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import { routeLogin } from './modules/login/routes';
import { useNotification } from './shared/hooks/useNotification';

const mainRouter: RouteObject[] = [
  {
    path: '/',
    element: <div>Tela Principal</div>,
    errorElement: <div>Página não encontrada</div>,
  },
];

const router: RemixRouter = createBrowserRouter([...mainRouter, ...routeLogin]);

function App() {
  const { contextHolder } = useNotification();
  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}

export default App;

// useCallback(( Essa só renderiza uma vez, usada para melhorar performance em funçoes grandes que n necessitam ser renderizadas)=>{

// },[]);

// const {name, SetName} = useState(renderizar novamente a informação no parametro);

// useEffect((sempre vai ser usado para notificar mudanças, as coisas pasam por aqui)=>{

// },[]);

// useMemo (Usado para aliviar o processamento em funçoes grande, ira renderizar uma vez)
