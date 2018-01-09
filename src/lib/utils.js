/**
 * [getCookie 通过key获取cookie]
 * @param  {[type]} a [description]
 * @return {[type]}   [description]
 */
export const getCookie = (a) => {
  const b = document.cookie.match(RegExp(`(^| )${a}=([^;]*)(;|$)`));
  return b ? decodeURIComponent(b[2]) : '';
};
/**
 * [setCookie 设置cookie]
 * @param {[type]} allCookie [description]
 */
export const setCookie = (allCookie) => {
  const argv = arguments;
  const argc = arguments.length;
  const now = new Date();
  let expires = argc > 2 ? argv[2] :
    new Date(now.getFullYear(), now.getMonth() + 1, now.getUTCDate());
  let path = argc > 3 ? argv[3] : '/';
  let domain = argc > 4 ? argv[4] : '.58.com';
  let secure = argc > 5 ? argv[5] : false;

  expires = expires === null ? '' : `; expires=${expires.toGMTString()}`;
  path = path === null ? '' : `; path=${path}`;
  domain = domain === null ? '' : `; domain=${domain}`;
  secure = secure === true ? '; secure' : '';

  document.cookie = `${allCookie}${expires}${path}${domain}${secure}`;
};
/**
 * [searchParams get方式提交rquest参数]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const searchParams = (params) => {
  return Object.keys(params).map((key) => {
    return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
  }).join('&');
};
export const getURLString = (str, key) => {
  const regEx = new RegExp(`[?&]${encodeURIComponent(key)}\\=([^&#]+)`);
  const value = (str.match(regEx) || ['', ''])[1];
  return value;
};
/**
 * [formatTime 将时间戳转换为需要的格式]
 * @param  {[type]} stamp [description]
 * @return {[type]}       [description]
 */
export const formatTime = (stamp, joiner) => {
  const date = new Date(parseInt(stamp, 10));
  const year = date.getFullYear() + joiner;
  const month = (date.getMonth() + 1 < 10 ?
    '0' + (date.getMonth() + 1) : date.getMonth() + 1) + joiner;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

  return `${year}${month}${day}`;
};
