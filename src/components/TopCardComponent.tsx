import Image from 'next/image'
import styles from '../app/page.module.css'

type Props = {
  isSubmit: boolean
}

const TopCardComponent = ({ isSubmit }: Props) => {
  return (
    <div className={styles.topCardComponent}>
      <div>
        <div>
          <Image
            src={'/assets/icons/vector.svg'}
            height={64}
            width={64}
            alt='Vector icon'
          />
        </div>

        <div>
          <h5 className={styles.text}>{isSubmit ? "" :"Next Step" }</h5>
        </div>

        <div>
          <h2 className={styles.text_h2}>
            {isSubmit ? <p>Expert Report Requested</p> : <p>Expert Report </p>}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default TopCardComponent
