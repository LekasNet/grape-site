import { motion } from 'framer-motion';
import { Images } from '../assets/images/images';
import './FirstPageSection.css'; // подключим стили отдельно

const FirstPageSection = () => {
    return (
        <motion.div
            className="first-page-container"
            initial={{ opacity: 0, filter: 'blur(20px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: 'easeOut' }}
        >
            <img src={Images.fpimage} alt="First page" className="first-page-image" />
        </motion.div>
    );
};

export default FirstPageSection;
