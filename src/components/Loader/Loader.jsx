import { Circles } from  'react-loader-spinner'
import styles from './Loader.module.scss';

const styledLoader = () => (
    <div className={styles.Loader}>
        <Circles color="#3f51b5" height={80} width={80}/>
    </div>
);

export default styledLoader;