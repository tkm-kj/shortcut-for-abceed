export const clickBackButton = () => {
  const el = document.querySelector('.back-button');
  if (el) (el as HTMLElement).click();
}
