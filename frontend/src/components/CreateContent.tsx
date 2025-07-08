import {useState} from "react"


enum ContentType{
  Twitter="Twitter",
  Github="Github",
  YouTube="YouTube",
  Notion="Notion",
  Others="Others",
  IDnPassWord="IDnPassWord"

}
const CreateContent = ({boxState, updateBoxState}:{boxState:boolean; updateBoxState:(state:boolean)=>void}) => {
  const [typeContent , setTypeContent] = useState(ContentType.YouTube)
  const [link, setLink] = useState("");
  const [aboutlink, setAboutlink] = useState("");

  const HandleSumbit = ()=>
  {
    console.log(typeContent, link, aboutlink);
    setLink('');
    setAboutlink('');
  }
  return (
    <div>
        <div className='w-screen h-screen fixed opacity-60'>
                <div className='h-4/5 w-2/5 bg-white rounded-2xl text-black'>
                    <div className='flex justify-between items-center p-8 font-bold text-xl'>
                        <span>Add Content</span>
                        <span className='cursor-pointer' onClick={()=>updateBoxState(!boxState)}>❌</span>
                    </div>
                    <div className="text-black">
                      <span className="flex justify-center items-center font-bold text-xl mb-5">Type of Content</span>
                            <div className="flex justify-around items-center gap-auto text-black font-semibold text-md">
                              <button className={` p-2 border-2 border-gray-600 rounded-xl hover:bg-blue-500 ${typeContent == ContentType.Twitter ? 'bg-blue-500' : '' } `} onClick={()=> setTypeContent(ContentType.Twitter)}>Twitter</button>
                              <button className={` p-2 border-2 border-gray-600 rounded-xl hover:bg-blue-500 ${typeContent == ContentType.Github ? 'bg-blue-500' : '' } `} onClick={()=> setTypeContent(ContentType.Github)}>Github</button>
                              <button className={` p-2 border-2 border-gray-600 rounded-xl hover:bg-blue-500 ${typeContent == ContentType.YouTube ? 'bg-blue-500' : '' } `} onClick={()=> setTypeContent(ContentType.YouTube)}>YouTube</button>
                              <button className={` p-2 border-2 border-gray-600 rounded-xl hover:bg-blue-500 ${typeContent == ContentType.Notion ? 'bg-blue-500' : '' } `} onClick={()=> setTypeContent(ContentType.Notion)}>Notion</button>
                              <button className={` p-2 border-2 border-gray-600 rounded-xl hover:bg-blue-500 ${typeContent == ContentType.Others ? 'bg-blue-500' : '' } `} onClick={()=> setTypeContent(ContentType.Others)}>Others</button>
                              <button className={` p-2 border-2 border-gray-600 rounded-xl hover:bg-blue-500 ${typeContent == ContentType.IDnPassWord ? 'bg-blue-500' : '' } `} onClick={()=> setTypeContent(ContentType.IDnPassWord)}>ID & PassWord</button>
                            </div>
                            <div className="flex flex-col items-center mt-5">
                            <input className="w-4/5  m-2 p-2 border-2 border-gray-600 rounded-xl" placeholder="Link type" value={link} onChange={(e)=> setLink(e.target.value)}/>
                            <input className="w-4/5  m-2 p-2 border-2 border-gray-600 rounded-xl" type="" placeholder="Description" value={aboutlink} onChange={(e)=> setAboutlink(e.target.value)}/>
                            <button className="w-2/5  m-2 p-2 border-2 border-gray-600 rounded-xl hover:bg-blue-500" onClick={HandleSumbit}>Submit</button>
                            </div>
                    </div>
                </div>
        </div>

    </div>
  )
}

export default CreateContent

 