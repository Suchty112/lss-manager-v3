(function() {
  I18n.translations.de.lssm.missionDate = {
    ago: 'Vor',
    months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
    dateRegex: /([0-9]{2})\. (.*), ([0-9]{2}):([0-9]{2})/i
  };

  I18n.translations.en.lssm.missionDate = {
    ago: 'ago',
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dateRegex: /([0-9]{2}) (.*) ([0-9]{2}):([0-9]{2})/i
  };

  I18n.translations.nl.lssm.missionDate = {
    ago: 'geleden',
    months: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
    dateRegex: /([0-9]{2}) (.*) ([0-9]{2}):([0-9]{2})/i
  };

  function parseMissionDate(dateString) {
      let matches = dateString.match(I18n.t('lssm.missionDate.dateRegex'));
      let day = matches[1];
      let month = matches[2];
      let hour = matches[3];
      let minute = matches[4];

    // Transform month name to numeric month
      let months = I18n.t("lssm.missionDate.months")
    month = months.indexOf(month);

      let today = new Date();

      let year = today.getFullYear();

      let date = new Date(year, month, day, hour, minute, 0, 0);

    // Make plausibility check. If diff is negative is has to be at least the year before.
    if (today.getTime() - date.getTime() < 0) {
      date.setFullYear(date.getFullYear() - 1);
    }
    return date;
  }

  // Just execute the script when there is a mission Headline
    let missionDate = $('#missionH1').length > 0 ? $('#missionH1').data('original-title') : null;
  if (missionDate != null) {
    // Parse mission date to Date() object
      let parsedMissionDate = parseMissionDate(missionDate);

      let today = new Date();
      let timeDiff = today.getTime() - parsedMissionDate.getTime();

      let minutes = (timeDiff / 1000) / 60;
      let hours = minutes / 60;
      let days = hours / 24;

      let newDay = Math.floor(days);
      let newHour = Math.floor(hours % 24);
      let newMin = Math.floor(minutes % 60);

      let timeGone = "";
    if (newDay > 0)
      timeGone += String.format(' {0} d', newDay);

    if (I18n.locale === 'en') {
        let offset = today.getTimezoneOffset() / 60;
      // Zahl 5, weil EST UTC+5 ist
        let newOffset = 5 - offset;
      newHour -= newOffset;
    }

    if (newHour > 0) {
      timeGone += String.format(' {0} h', newHour);
    }

    if (newMin > 0) {
      timeGone += String.format(' {0} min', newMin);
    }

      let markup;
    if (I18n.locale === 'de') {
      markup = '{0} - <span>{1} {2}</span>';
    } else {
      markup = '{0} - <span>{2} {1}</span>';
    }

    markup = String.format(markup, missionDate, I18n.t("lssm.missionDate.ago"), timeGone)
    $('#missionH1').after('<div><small>' + markup + '</small></div>');
  }
})();
