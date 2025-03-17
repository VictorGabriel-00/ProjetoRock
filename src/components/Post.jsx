import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import style from './Post.module.css';


export function Post ({author, publisheAdt}) {
     const publishDate = format (publisheAdt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR} )
     const publishnow = formatDistanceToNow (publisheAdt, {locale: ptBR, addSuffix: true,}) 

    return (
        <article className= {style.post}>
            <header>
                <div className= {style.author}>
                   <Avatar src={author.avatarUrl}
                   />
                    <div className= {style.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                 <time title={publishDate} datetime="2025-03-06"> {publishnow} </time> 
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
              <Comment/>
              <Comment/>
            </div>
        </article>
    );



}