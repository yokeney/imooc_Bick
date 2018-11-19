
export const  type={
    SWITCH_MENU:'SWITCH_MENU'
}
export function switchMenu(meneuName){
    return {
        type:type.SWITCH_MENU,
        meneuName
    }
}
