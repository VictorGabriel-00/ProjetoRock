import { PencilLine } from 'phosphor-react'

import style from '../components/sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar(){

    return(
        <aside className={style.sidebar}>
            <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=260&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            />

            <div className={style.profile}> 

                <Avatar
                 src="https://media-for2-2.cdn.whatsapp.net/v/t61.24694-24/468606498_4070819139866968_4946346085729600054_n.jpg?ccb=11-4&oh=01_Q5AaIHcbQ6xjbfGwfqiUs9H9vPoY1ErZJjwNG8ewoHlS-JFl&oe=67D5F9F7&_nc_sid=5e03e0&_nc_cat=104"  
                />

                <strong>victor Gabriel</strong>
                <span>Dev Back-and</span>    
            </div>  

            <footer>
                <a href="#">
                    <PencilLine size={20}/> 
                    Editar seu Perfil
                </a>
            </footer>

        </aside>

    )


}