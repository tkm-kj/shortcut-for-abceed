export const clickBackButton = (): void => {
  const el = document.querySelector('.back-button')
  if (el !== null) (el as HTMLElement).click()
}
