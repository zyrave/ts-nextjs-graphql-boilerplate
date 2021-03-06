export default function toggleClasses(toggleClass: any, classList: any, force: any) {
  const level = classList.indexOf(toggleClass);
  const removeClassList = classList.slice(0, level);
  removeClassList.map((className: any) => document.body.classList.remove(className));
  if (force === true) {
    document.body.classList.add(toggleClass);
  } else if (force === false) {
    document.body.classList.remove(toggleClass);
  } else {
    document.body.classList.toggle(toggleClass);
  }
  return document.body.classList.contains(toggleClass);
}
