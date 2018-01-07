/*global localStorage:true*/
const keys = {
  user: 'ZZ_AD_USERNAME',
  cates: 'ZZ_AD_CATEDATAS',
  districts: 'ZZ_AD_DISTRICTS',
};

export const setLocalItem = (key, value) => {
  const curtime = new Date().getTime();//获取当前时间
  localStorage.setItem(keys[key], JSON.stringify({ value, time: curtime }));//转换成json字符串序列
};

export const getLocalItem = (key, exp) => {
  const val = localStorage.getItem(keys[key]);
  if (!val) return undefined;
  const obj = JSON.parse(val);
  //如果当前时间-减去存储的元素在创建时候设置的时间 > 过期时间
  if (exp && (new Date().getTime() - obj.time) > exp) {
    return undefined;
  }
  return obj.value;
};

export const clearLocalItem = (key) => {
  localStorage.removeItem(keys[key]);
};
