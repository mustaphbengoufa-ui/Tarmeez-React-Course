import './App.css';
import SimpleContainer from './container';
import { Button,ButtonGroup } from '@mui/material';
import BasicStack from './SimpelStack';
import BasicTextFields from './InputField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red, blue, green,orange } from '@mui/material/colors';
import { useList } from './Contexts/michenListContex';
function App() {
  const theme = createTheme({
  palette: {
    main:red,
    primary:{
      main:blue[500]
    },
    secondary: {
      main:orange[600]
    },
    Done:{
      main:green[200]
    },
    notYet:{
      main:red[500]
    },
    Delete:{
      main:red[500]
    }

  },
});
const {AllItems,DoneItems,noYetItems,list,setCopylist}=useList()
  return (
    
    <ThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">

        <SimpleContainer>
          <h1>My machins</h1>
          <ButtonGroup variant="outlined" aria-label="Basic button group"style={{
            marginBottom:"10px"
          }}>
            <Button color='secondary' onClick={()=>{
              setCopylist([...list])
              AllItems(list)
            }}>all</Button>
            <Button onClick={()=>{DoneItems(list)}}>done</Button>
            <Button onClick={()=>{noYetItems(list)}}>not yet</Button>
          </ButtonGroup>
            <BasicStack/>
            <BasicTextFields/>
        </SimpleContainer>
  
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
