import style from './Avatar.module.css';

export function Avatar({hasBoder = true, src}){
    return(
        <img className= {hasBoder ? style.avatarWhithBorder : style.avatar}
        src={src}
        />
    )

}