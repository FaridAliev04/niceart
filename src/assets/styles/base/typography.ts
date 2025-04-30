import TrialBold from '../../fonts/west-trial/WestTrial-Bold.otf';
import TrialExtraBold from '../../fonts/west-trial/WestTrial-ExtraBold.otf';
import TrialLight from '../../fonts/west-trial/WestTrial-Light.otf'
import TrialBlack from '../../fonts/west-trial/WestTrial-Black.otf'
const typography = {
  '@font-face': [
    {
      fontFamily: 'Trial Bold',
      src: `url("${TrialBold}")`,
    },
    {
      fontFamily: 'Trial Extra Bold ',
      src: `url("${TrialExtraBold}")`,
    },
    {
        fontFamily: 'Trial Light',
        src: `url("${TrialLight}")`,
      },
      {
        fontFamily: 'Trial Black',
        src: `url("${TrialBlack}")`,
      },
  ],
};

export default typography;