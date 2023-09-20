import React, { useState } from 'react'
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import {Navigate} from 'react-router-dom'

const modules = {

    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
    ],
};
const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
];

const Create = () => {

    const [title, setTtile] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [isMain, setIsMain] = useState(true);
    const [isSport, setIsSport] = useState(false);
    const [isGastro, setIsGastro] = useState(false);
    const [isGaming, setIsGaming] = useState(false);
    const [isFinance, setIsFinance] = useState(false);
    const [file,setFile] =useState('')
    const [redirect,setRedirect] = useState(false)

    async function createNewPost(e) {
        e.preventDefault();
        const data = new FormData();
        data.set('title',title)
        data.set('summary',summary)
        data.set('content',content)
        data.set('isMain',isMain)
        data.set('isSport',isSport)
        data.set('isGastro',isGastro)
        data.set('isGaming',isGaming)
        data.set('isFinance',isFinance)
        data.set('file',file[0])
            const response = await fetch('http://localhost:4400/create', {
                method: 'POST',
                body: data,
                
        });
        if(response.ok){
            setRedirect(true)
        }
        
        
    }

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        switch (name) {
          case 'main':
            setIsMain(checked);
            break;
          case 'sport':
            setIsSport(checked);
            break;
          case 'gastro':
            setIsGastro(checked);
            break;
          case 'gaming':
            setIsGaming(checked);
            break;
          case 'finance':
            setIsFinance(checked);
            break;
          default:
            break;
        }
      };
      if(redirect){
       return <Navigate to={'/'}/>
      }
    return (
        <form onSubmit={createNewPost}  >
            <input type='title' placeholder='Title' value={title} onChange={e => setTtile(e.target.value)} />
            <input type='summary' placeholder='Summary' value={summary} onChange={e => setSummary(e.target.value)} />
            <input type='file' onChange={e =>setFile(e.target.files)}/>
            <ReactQuill value={content} onChange={newValue => setContent(newValue)} modules={modules} formats={formats} />
            <h2 className='formh2'>Chose category to post</h2>

            <div className='create-chechks'>
      <div className='topic-choser'>
        <p>Main</p>
        <input
          type="checkbox"
          id="Main"
          name="main"
          checked={isMain}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className='topic-choser'>
        <p>Sport</p>
        <input
          type="checkbox"
          id="Sport"
          name="sport"
          checked={isSport}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className='topic-choser'>
        <p>Gastro</p>
        <input
          type="checkbox"
          id="Gastro"
          name="gastro"
          checked={isGastro}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className='topic-choser'>
        <p>Gaming</p>
        <input
          type="checkbox"
          id="Gaming"
          name="gaming"
          checked={isGaming}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className='topic-choser'>
        <p>Finance</p>
        <input
          type="checkbox"
          id="Finance"
          name="finance"
          checked={isFinance}
          onChange={handleCheckboxChange}
        />
      </div>
    </div>
            <button style={{ marginTop: '10px' }}>Create post</button>
        </form>
    )
}

export default Create
