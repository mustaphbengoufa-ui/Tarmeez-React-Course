import React, { createContext, useState, useContext } from 'react';

const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [list, setList] = useState([
    { id: 1, name: 'العنصر الأول',isDone:false },
    { id: 2, name: 'العنصر الثاني',isDone:false },
  ]);
  const [Copylist,setCopylist]=useState([...list])

  // دالة الإضافة
  const addItem = (newItem) => {
    setCopylist((prevList) => [...prevList, newItem]);
  };

  // دالة الحذف
  const removeItem = (id) => {
    setList((prevList) => prevList.filter((item) => item.id !== id));
  };

  // دالة التعديل
  const updateItem = (id, updatedName) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, name: updatedName } : item
      )
    );
  };
const setIsDoneMark= (id) => {
    setList((prevList) =>
        
      prevList.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
      
    );
    setCopylist([...list])
  };
  const noYetItems=(list)=>{
    setCopylist(list.filter((Item)=> Item.isDone ===false))
  }
  const DoneItems=(list)=>{
    setCopylist(list.filter((Item)=> Item.isDone===true))
  }
  const AllItems=(list)=>{

    setCopylist(list.filter((Item)=> Item))
  }
  const [michen,setmichen]=useState('')

  const [editingId, setEditingId] = useState(null);

  const [EditAddButton,setEditAddButton]=useState("ADD")
  return (
    <ListContext.Provider value={{Copylist,setCopylist,EditAddButton,michen,setEditingId,editingId,setmichen,noYetItems,DoneItems,AllItems,setEditAddButton, list, addItem, removeItem, updateItem ,setIsDoneMark}}>
      {children}
    </ListContext.Provider>
  );
};
 
export const useList = () => {return useContext(ListContext);}