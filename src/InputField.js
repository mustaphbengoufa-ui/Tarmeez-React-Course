import { Button, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useList } from './Contexts/michenListContex' ;

export default function BasicTextFields() {
  const {addItem, 
    updateItem, 
    michen, 
    setmichen, 
    EditAddButton, 
    setEditAddButton, 
    editingId, 
    setEditingId
  }=useList()
 
 
  const handelSubmit=(e)=>{
    if(!michen.trim()) return;
      if(EditAddButton==="EDIT"){
        updateItem(editingId,michen)
        setEditAddButton("ADD")
      }else{
        addItem({id:Date.now(),name:michen,isDone:false})
        setEditingId(null)
      }
      setmichen("")
  }
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    
    >
        <Stack   style={{
        width:"100%",
        marginTop:"50px",
        gap:"10px",

      }}
      direction="row">
      <TextField
      style={{
        width:"70%",
       backgroundColor:"white",
       borderRadius:"5px"
      }}
      value={michen}
      onChange={(e)=>setmichen(e.target.value)}
      id="outlined-basic" 
      label="michen title" 
      variant="outlined" />
        <Button variant='contained' 
        style={{
            width:"30%",

        }}
        color="secondary"
        onClick={handelSubmit}
        >
            {EditAddButton}
        </Button>
        </Stack>
</Box>
  );
}
