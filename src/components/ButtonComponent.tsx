import styles from '../app/page.module.css'

type Props = {
  buttonText: string
  buttonColor: string
  buttonBackgroundColor: string
  onClick: () => void
}
const ButtonComponent = ({
  buttonText,

  onClick,
}: Props) => {
  return (
    <div>
      <button type='submit' className={styles.button} onClick={onClick}>
        {buttonText}
      </button>
    </div>
  )
}

export default ButtonComponent
