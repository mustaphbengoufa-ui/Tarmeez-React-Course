import { Delete ,Edit,CheckCircle} from '@mui/icons-material';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useList } from './Contexts/michenListContex';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function BasicStack() {
  const {list ,removeItem ,setCopylist,Copylist,updateItem,setIsDoneMark ,setEditAddButton,setmichen,setEditingId}=useList()
    
  const michenList=Copylist.map((m)=>{
      let color =m.isDone?"Done":"notYet"
        return <Item key={m.id}>
            <Stack direction="row">
                <h1>
                    {m.name}
                </h1>
                <Button onClick={()=>{
                  
                  setIsDoneMark(m.id)
                  setCopylist([...list])
                  console.log(m.isDone)
                }}>

                     <CheckCircle
                     color={color}/>
                </Button>
                <Button color="primary" onClick={()=>{
                  setEditAddButton("EDIT")
                  setmichen(m.name)
                  setEditingId(m.id);                  
                }}>
                     <Edit/>
                </Button>
                <Button color="Delete" onClick={()=>{removeItem(m.id)}}>
                     <Delete />
                </Button>
               
            </Stack>
        </Item>    })
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        {michenList}
      </Stack>
    </Box>
  );
}
