
import iconGIt from './imgens/github.png'
import youtube from './imgens/youtube.png'
import twitter from './imgens/twitter.svg'
import twitch from './imgens/twitch.png'
import instagram from './imgens/instagram.png'
import linkedin from './imgens/linkedin.png'
import followers from './imgens/followers.png'
import search from './imgens/search.png'
import'./app.css'
import { useState } from 'react'
function App() {
  const [dados, setDados] = useState({
    name: "Luan Carlos",
    description: "javascript | typescript | Reactjs ",
    nick_git: "LuanCarlosCar",
    nick_git2:'',
    seguidores: 5,
    img: 'https://avatars.githubusercontent.com/u/69122423?v=4'
  })
   const chamadaGit = async ()=>{
     const url = `https://api.github.com/users/${dados.nick_git2}`
     
   fetch(url).then(response => response.json()).then(data =>{ 
     setDados({...dados, name:data.name, description: data.description, nick_git:data.login, img: data.avatar_url,seguidores: data.followers})})
  }
  const submite = (e) =>{
    e.preventDefault();
    chamadaGit();
   
  }
  const handleChange=(e)=>{
    setDados({...dados, nick_git2: e.target.value})
  }
 
            const clickIcone = ()=>{
                const icon = document.querySelector('.icon')
                const search = document.querySelector('.teste')
                search.classList.toggle('active')
                
                
            }
  return (
      <div className="plus">
        <main className="container">
          <div className='container_2'>

            <div className="avatar">
              <img src={dados.img} />
            </div>
            <h1>{dados.name}</h1>
            <a href={`https://github.com/${dados.nick_git2 || dados.nick_git }`} target='_blank'><img  className='img1' src={iconGIt} alt='icone git'/> {dados.nick_git}</a>
            <div className='limite'>
              <a><img src={followers}  className='img1' alt='icone de followers'/>{dados.seguidores}</a>

            <p>{dados.description}</p>
            </div>
            <ul>
              <li><a href="#" target='_blank'><img className='img2' src={linkedin} alt='icone linkedin'/></a></li>
              <li><a href="#" target='_blank'><img className='img2' src={youtube} alt='icone youtube'/></a></li>
              <li><a href="#" target='_blank'><img className='img2' src={twitch} alt='icone twitch'/></a></li>
              <li><a href="#" target='_blank'><img className='img2' src={instagram} alt='icone instagram'/></a></li>
              <li><a href="#" target='_blank'><img className='img2' src={twitch} alt='icone twitch'/></a></li>
            </ul>
          </div>

        </main>
        <div className='containerForms'>
          <h1>Busque por usuários do github</h1>
          <div >

          
          </div>
          <div className='teste'>


            <form  onSubmit={submite}>
              <div className='icone'  onClick={submite}></div>
    
            <div className='input'>

            <input id='caixaText' type='text' placeholder="Digite um nick" name='nick' value={dados.nick_git2} required onChange={handleChange}  />
            </div>
            
          </form>

           
          </div>
          
         
        </div>
      </div>
  );
}

export default App;
