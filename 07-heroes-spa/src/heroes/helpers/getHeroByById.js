import {heroes} from '../data'


export const getHeroByById =(id)=> {



  return heroes.find(heroe=> heroe.id === id)

}