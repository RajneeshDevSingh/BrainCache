
const CreateContent = ({boxState, updateBoxState}:{boxState:boolean; updateBoxState:(state:boolean)=>void}) => {
  return (
    <div>
        {boxState && <div className='w-screen h-screen fixed opacity-40 flex justify-center items-center'>
                <div className='h-4/5 w-2/5 bg-white rounded-2xl'>
                    <div className='flex justify-between items-center p-8 font-bold text-xl'>
                        <span>Add Content</span>
                        <span className='cursor-pointer' onClick={()=>updateBoxState(!boxState)}>❌</span>
                    </div>
                    <div>
                            <input placeholder=""/>
                            <input type="" placeholder=""/>
                    </div>
                </div>
        </div>}

    </div>
  )
}

export default CreateContent