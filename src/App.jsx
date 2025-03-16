import { Header } from './components/header';
import { Post } from './components/Post';
import { Sidebar } from './components/sidebar';
import style from './App.module.css'


import './global.css';


const post = [
    {
      id:1,
      author: {
        avatarUrl: '"https://media-for2-2.cdn.whatsapp.net/v/t61.24694-24/468606498_4070819139866968_4946346085729600054_n.jpg?ccb=11-4&oh=01_Q5AaIHcbQ6xjbfGwfqiUs9H9vPoY1ErZJjwNG8ewoHlS-JFl&oe=67D5F9F7&_nc_sid=5e03e0&_nc_cat=104"',
        name: 'Victor Gabriel',
        role: 'Dev Back-And',
      },
      content: [
        {type: 'paragraph', content: 'Fala galeraa 👋'},
        {type:'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
        {type: 'link', content:  'jane.design/doctorcarea'},
      ],
      publisheAdt: new Date ('2025-05-03 20:00:00 '),
    },
    {
      id:2,
      author: {
        avatarUrl: 'blob:https://web.whatsapp.com/53c557e2-5a9f-4c22-8423-369b4ad11706',
        name: 'Leticia Cordeiro',
        role: 'Design',
      },
      content: [
        {type: 'paragraph', content: 'Fala galeraa 👋'},
        {type:'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type: 'link', content:  'jane.design/doctorcarea'},
      ],
      publisheAdt: new Date ('2025-05-03 20:00:00 '),
    },

];

export function App() {
  return (

    <div>
      <Header />

      <div className={style.wrapper}>
       
        <Sidebar />

        <main>
         {post.map(post=> {
          return(
            <Post 
              author={post.author}
              content={post.content}
              publisheAdt={post.publisheAdt}
            />
          )
         })}

        </main>

      </div>

    </div>

  );
}


export default App
