import styles from '../app/page.module.css'

type Props = {
  isSubmit: boolean
}

const ButtomCardComponent = ({ isSubmit }: Props) => {
  return (
    <div>
      {isSubmit ? (
        <div>
          <p className={styles.text}>
            We received your messge. Please feel free to get in touch again if
            you would like to include any further details or ask any other
            questions. We are eager to assist you.
          </p>
        </div>
      ) : (
        <div>
          <p className={styles.text}>
            Please get in touch if you would like an expert report for this
            site. Benefits include:
          </p>
          <ul className={styles.text}>
            <li>Key insights from our expert team</li>
            <li>An in-depth analysis of the site</li>
            <li>Recommendations of next steps to take</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default ButtomCardComponent
