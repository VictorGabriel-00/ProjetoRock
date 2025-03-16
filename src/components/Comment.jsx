import { ThumbsUp, Trash } from 'phosphor-react'
import style from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment () {
   
return(
   <div className={style.comment}>

        <Avatar hasBoder={false} src="https://media-for2-2.cdn.whatsapp.net/v/t61.24694-24/468606498_4070819139866968_4946346085729600054_n.jpg?ccb=11-4&oh=01_Q5AaIHcbQ6xjbfGwfqiUs9H9vPoY1ErZJjwNG8ewoHlS-JFl&oe=67D5F9F7&_nc_sid=5e03e0&_nc_cat=104" alt="" />
        <div className={style.commentBox}>
            <div className={style.comentContent}>
                <header>
                    <div className={style.authorAndTime}>
                        <strong>Victor Gabriel</strong>
                        <time title="06 de Março às 10:00h" datetime="2025-03-06"> Cerca de 1h atras</time>
                    </div>

                    <button title="Deletar Comentario">
                        <Trash size={24} />
                    </button>
                </header>
                
                
                <p>
                    Muito bom Devon, parabéns!! 👏👏
                </p>


            </div>

            <footer>
                <button>
                    <ThumbsUp />
                    Apladuir<span>20</span>
                </button>
            </footer>

        </div>


    </div>
)
}