import React from 'react';
import { withTranslation } from 'react-i18next';
import { changeLanguage } from '../api/apiCalls';

const LanguageSelector = props => {
  const onChangeLanguage = language => {
    const { i18n } = props;
    i18n.changeLanguage(language);
    changeLanguage(language);
  };

  return (
    <div className="container">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/800px-Flag_of_Turkey.svg.png"
        alt="Turkish Flag"
        height={100}
        onClick={() => onChangeLanguage('tr')}
        style={{ cursor: 'pointer' }}
      ></img>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/US_flag_51_stars.svg/2560px-US_flag_51_stars.svg.png" alt="USA Flag" height={100} onClick={() => onChangeLanguage('en')} style={{ cursor: 'pointer' }}></img>
    </div>
  );
};

export default withTranslation()(LanguageSelector);