const calculateVac = (vacList, userInfo) => {
  let check = false;
  let vacinasDisponiveis = [];
  for (let i = 0; i < vacList.length; i++) {
    check = false;
    for (let j = 0; j < userInfo.vaccines.length; j++) {
      if (vacList[i].id === userInfo.vaccines[j].id) {
        check = true;
      }
    }
    if (check === false) {
      vacinasDisponiveis.push(vacList[i]);
    }
  }
  return vacinasDisponiveis;
};
export default calculateVac;
