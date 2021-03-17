export default function getTop(e: HTMLElement) {
  let temp = e;
  let top = 0;
  let left = 0;
  while (temp !== null) {
    top += temp.offsetTop;
    left += temp.offsetLeft;
    temp = temp.offsetParent as HTMLElement;
  }
  return {
    top,
    left,
  };
}
