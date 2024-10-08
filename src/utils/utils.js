import dayjs from "dayjs";

export const formatDate = d => {
  // eslint-disable-next-line no-param-reassign
  const fd = new Date(d).getTime();
  return dayjs(fd).format('YYYY-MM-DD HH:mm:ss');
};

export const replaceHtml = htmlStr => {
  const text = htmlStr.replace(/<\/?.+?>/g, '');
  return (text.replace(/ /g, '')).replace(/[\r\n]/g, '');
};



export const findArrayChildrenData = (arr=[], idKey)=>{
  let res = []
  arr.forEach(item=>{
    res.push(item.menuCode)
    if(Array.isArray(item.children)){
      res.push(...findArrayChildrenData(item.children))
    }
  })

  return res
}
