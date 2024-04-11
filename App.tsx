import { Dispatch, SetStateAction, useState } from 'react'
import { Pag1 } from './src/screens/Pag1';
import { Pag2 } from './src/screens/Pag2';
import { Pag3 } from './src/screens/Pag3';
import { Pag4 } from './src/screens/Pag4';
import { Pag5 } from './src/screens/Pag5';
import { Pag6 } from './src/screens/Pag6';

import {
  useFonts,
  Comfortaa_400Regular
} from '@expo-google-fonts/comfortaa';

export interface IPage {
  setPage: Dispatch<SetStateAction<number>>
}

export default function App() {
  const [page, setPage] = useState(1)
  const [fontsLoaded] = useFonts({
    Comfortaa_400Regular
  });
  if (!fontsLoaded) {
    return null;
  }
  if (page == 1) {
    return <Pag1 setPage={setPage} />
  } else if (page == 2) {
    return <Pag2 setPage={setPage} />
  } else if (page == 3) {
    return <Pag3 setPage={setPage} />
  } else if (page == 4) {
    return <Pag4 setPage={setPage} />
  } else if (page == 5) {
    return  //navigation />
  }
}

