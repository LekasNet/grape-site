import { motion } from 'framer-motion';
import { Images } from '../../assets/images/images';
import GrainOverlayWrapper from '../widgets/GrainOverlayWrapper';
import './FirstPageSection.css';
import '../widgets/FirstPage/IntroGrapeWithArrow.css'
import IntroGrapeWithArrow from "../widgets/FirstPage/IntroGrapeWithArrow";
import BottomText from "../widgets/FirstPage/FPBottomText";

const FirstPageSection = () => {
    return (
        <motion.div
            className="first-page-container"
            initial={{ opacity: 0, filter: 'blur(20px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: 'easeOut' }}
        >
            <GrainOverlayWrapper>
                <img src={Images.fpimage} alt="First page" className="first-page-image"/>
            </GrainOverlayWrapper>
            <IntroGrapeWithArrow/>
            <BottomText/>
        </motion.div>
    );
};

export default FirstPageSection;
