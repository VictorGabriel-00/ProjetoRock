import { Avatar } from './Avatar';
import { Comment } from './Comment';
import style from './Post.module.css';


export function Post (props) {

    // oloa

    return (
        <article className= {style.post}>
            <header>
                <div className= {style.author}>
                   <Avatar src="https://media-for2-2.cdn.whatsapp.net/v/t61.24694-24/468606498_4070819139866968_4946346085729600054_n.jpg?ccb=11-4&oh=01_Q5AaIHcbQ6xjbfGwfqiUs9H9vPoY1ErZJjwNG8ewoHlS-JFl&oe=67D5F9F7&_nc_sid=5e03e0&_nc_cat=104"
                   />
                    <div className= {style.authorInfo}>
                        <strong>Victor Gabriel</strong>
                        <span>Dev Back-And</span>
                    </div>
                </div>
                <time title="06 de Março às 10:00h" datetime="2025-03-06"> Publicado a 1h</time>
            </header>

            <div className={style.content}>

            </div>

            <form className={style.CommentForm}>
                <strong>Deixe o seu FeedBack</strong>

                <textarea 
                    placeholder="deixe um commentario"
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>


            <div className={style.commentList}>
              <Comment/>
            </div>
        </article>
    );



}