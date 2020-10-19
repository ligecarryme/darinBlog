export function showcharacter(list, count){
    if (!list) {
        return;
    }
    for (let item of list) {
        if (item.description.length > count) {
            item.description = item.description.slice(0, count) + '...'
        }
    }
    return list;
}