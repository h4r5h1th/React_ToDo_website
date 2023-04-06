import React, {useEffect, useState} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import "./Content.css"

function Content() {

  const getLocalitems = ()=>{
    let list = localStorage.getItem('lists');
    if(list){
      return JSON.parse(list);
    }else{
      return [];
    }
  }

  const [Data, SetData] = useState("")
  const [ArrData, SetArrData] = useState(getLocalitems())

  function AddData(){
    if(!Data){

    }else{
    SetArrData([...ArrData, Data])
    SetData("")
    }
  }

  function DeleteData(id){
    const UpdatedData = ArrData.filter((x, index)=>{
      return index !== id;
    })
    SetArrData(UpdatedData);
  }

  useEffect(() =>{
    localStorage.setItem("lists", JSON.stringify(ArrData))
  }, [ArrData])

  return (
    <div className='Contents'>
      <input type='text' className='SearchBar' value={Data} onChange={(x)=>SetData(x.target.value)} placeholder='📒 write your task here.......'></input>
      <button className='task-button' onClick={AddData}>Add</button>
      <div className='AllTasksContent'>
        {
          ArrData.map((x, index)=>{
            return(
              <div key={index}>
                <div className='TasksContent'>
                  <p className='Tasks'>{x}</p>
                </div>
                <button className='DeleteButton' onClick={()=>DeleteData(index)}><DeleteIcon sx={{ fontSize: 17 }} /></button>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default Content